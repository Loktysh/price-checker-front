import {
  StyledHeader,
  StyledHeaderName,
  StyledSearchField,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchDropdown,
  StyledDropdownItem,
} from './styled';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { COLOR_GRAY_300, COLOR_GREEN_100 } from '../constants/colors';
import { API_LINK } from '../constants/index';
import { useDebounce } from '../../../hooks/';
import { Product } from '../types';
import ProductElement from './ProductElement';
import { StyledAccountButton } from './styled';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../utils';

const AppHeader = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchItems, setSearchItems] = useState<Product[]>([]);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const debouncedSearch = useDebounce(inputValue, 600);

  useEffect(() => {
    fetchProducts(API_LINK + debouncedSearch).then(data => {
      setSearchItems(data.products);
      setDropdown(true);
    });
  }, [debouncedSearch]);

  useEffect(() => {
    if (!inputValue.length) {
      setDropdown(false);
    }
  }, [inputValue]);

  const toggleDropDown = (toggle: boolean) => {
    if (inputValue.length) setDropdown(toggle);
  };

  return (
    <StyledHeader justify='space-around'>
      <StyledHeaderName to='/'>
        <h1>PRICE CHECKER</h1>
      </StyledHeaderName>
      <StyledSearchField>
        <StyledSearchInput
          type='text'
          placeholder='Search products'
          onInput={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          onFocus={() => toggleDropDown(true)}
          onBlur={() => toggleDropDown(false)}
          value={inputValue}
        />
        <Link to={'/products/' + inputValue}>
          <StyledSearchButton color={COLOR_GREEN_100} onClick={() => setDropdown(false)}>
            Search!
          </StyledSearchButton>
        </Link>

        <StyledSearchDropdown visible={dropDown} direction='column'>
          {searchItems.length > 0 ? (
            searchItems.map((item: Product) => <ProductElement key={item.id} item={item} />)
          ) : (
            <StyledDropdownItem>Sorry, no items were found...</StyledDropdownItem>
          )}
        </StyledSearchDropdown>
      </StyledSearchField>
      <StyledAccountButton outline textColor={COLOR_GRAY_300}>
        Log in
      </StyledAccountButton>
    </StyledHeader>
  );
};

export default AppHeader;
