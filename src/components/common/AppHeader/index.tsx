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

const AppHeader = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchItems, setSearchItems] = useState([]);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const debouncedSearch = useDebounce(inputValue, 500);

  // TODO: move fetch to helpers
  //? where to put helpers in folder structure
  const fetchProducts = async (): Promise<any> => {
    const res: Response = await fetch(API_LINK + inputValue);
    const data: any = await res.json();
    return data;
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      setIsSearching(true);
      fetchProducts().then(data => {
        console.log(data.products);
        setDropdown(true);
        setSearchItems(data.products);
        setIsSearching(false);
      });
    } else {
      setDropdown(false);
    }
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
          onInput={(e: any) => setInputValue(e.target.value)}
        />
        <StyledSearchButton color={COLOR_GREEN_100}>Search!</StyledSearchButton>
        <StyledSearchDropdown direction='column' visible={dropDown}>
          {searchItems.map((item: any, index) => {
            const oddNumber = index % 2 !== 0 ? true : false;
            return (
              <Link key={item.id} to='/items'>
                <StyledDropdownItem odd={oddNumber}>
                  {item.extended_name}
                  <StyledDropdownImage src={item.images.header} />
                </StyledDropdownItem>
              </Link>
            );
          })}
        </StyledSearchDropdown>
      </StyledSearchField>
    </StyledHeader>
  );
};

export default AppHeader;
