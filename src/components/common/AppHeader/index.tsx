import {
  StyledHeader,
  StyledHeaderName,
  StyledSearchField,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchDropdown,
  StyledDropdownItem,
  StyledDropdownImage,
} from './styled';
import React, { useState, useEffect } from 'react';
import { COLOR_GREEN_100 } from '../constants/colors';
import { API_LINK } from '../constants/index';
import { useDebounce } from '../../../hooks/';
import { Link } from 'react-router-dom';
import { Product, ItemsData } from '../types';

const AppHeader = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchItems, setSearchItems] = useState<Product[]>([]);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const debouncedSearch = useDebounce(inputValue, 600);

  // TODO: move fetch to helpers
  //? where to put helpers in folder structure

  useEffect(() => {
    const fetchProducts = async (): Promise<ItemsData> => {
      const res: Response = await fetch(API_LINK + debouncedSearch);
      const data: ItemsData = await res.json();
      return data;
    };

    fetchProducts().then(data => {
      console.log(data);
      console.log(data.products);
      setDropdown(true);
      setSearchItems(data.products);
    });
  }, [debouncedSearch]);

  return (
    <StyledHeader justify='space-around'>
      <StyledHeaderName to='/'>
        <h1>PRICE CHECKER</h1>
      </StyledHeaderName>
      <StyledSearchField>
        <StyledSearchInput
          type='text'
          placeholder='Search products'
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <StyledSearchButton color={COLOR_GREEN_100}>Search!</StyledSearchButton>
        {searchItems ? (
          <StyledSearchDropdown direction='column' visible={dropDown}>
            {searchItems.length > 0 ? (
              searchItems.map((item: Product, index) => {
                const oddNumber = index % 2 !== 0 ? true : false;
                return (
                  <Link key={item.id} to='/items'>
                    <StyledDropdownItem odd={oddNumber}>
                      {item.extended_name}
                      <StyledDropdownImage src={item.image} />
                    </StyledDropdownItem>
                  </Link>
                );
              })
            ) : (
              <StyledDropdownItem>Sorry, no items found...</StyledDropdownItem>
            )}
          </StyledSearchDropdown>
        ) : null}
      </StyledSearchField>
    </StyledHeader>
  );
};

export default AppHeader;
