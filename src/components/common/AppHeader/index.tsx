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
import { COLOR_GREEN_100 } from '../constants/colors';
import { API_LINK } from '../constants/index';
import { useDebounce } from '../../../hooks/';
import { Product, ItemsData } from '../types';
import ProductElement from './ProductElement';
import { StyledAccountLink } from './styled';

const AppHeader = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchItems, setSearchItems] = useState<Product[]>([]);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const debouncedSearch = useDebounce(inputValue, 600);

  useEffect(() => {
    const fetchProducts = async (): Promise<ItemsData> => {
      const res: Response = await fetch(API_LINK + debouncedSearch);
      const data: ItemsData = await res.json();
      return data;
    };

    fetchProducts().then(data => {
      setSearchItems(data.products);
      setDropdown(true);
    });
  }, [debouncedSearch]);

  useEffect(() => {
    if (!inputValue.length) {
      setDropdown(false);
    }
  }, [inputValue]);

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
          value={inputValue}
        />
        <StyledSearchButton color={COLOR_GREEN_100}>Search!</StyledSearchButton>
        <StyledSearchDropdown visible={dropDown} direction='column'>
          {searchItems.length > 0 ? (
            searchItems.map((item: Product) => <ProductElement key={item.id} item={item} />)
          ) : (
            <StyledDropdownItem>Sorry, no items were found...</StyledDropdownItem>
          )}
        </StyledSearchDropdown>
      </StyledSearchField>
      <StyledAccountLink to='/login'>Log in</StyledAccountLink>
    </StyledHeader>
  );
};

export default AppHeader;
