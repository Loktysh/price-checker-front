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
import { COLOR_GRAY_300, COLOR_GREEN_100 } from '../constants/colors';
import { API_LINK } from '../constants/index';
import { useDebounce } from '../../../hooks/';
import { Link } from 'react-router-dom';
import { Product, ItemsData } from '../types';
import { Button } from '../../typography';
import ProductElement from './ProductElement';
import { StyledAccountButton } from './styled';

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
          <StyledSearchDropdown visible={dropDown} direction='column'>
            {searchItems.length > 0 ? (
              searchItems.map((item: Product) => {
                return <ProductElement key={item.id} item={item} />;
              })
            ) : (
              <StyledDropdownItem>Sorry, no items found...</StyledDropdownItem>
            )}
          </StyledSearchDropdown>
        ) : null}
      </StyledSearchField>
      <StyledAccountButton outline textColor={COLOR_GRAY_300}>
        Log in
      </StyledAccountButton>
    </StyledHeader>
  );
};

export default AppHeader;
