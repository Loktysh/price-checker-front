import {
  StyledHeader,
  StyledHeaderName,
  StyledSearchField,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchDropdown,
  StyledDropdownItem,
  BasicLink,
} from './styled';
import React, { FC, useState, useEffect, useCallback, ChangeEvent } from 'react';
import { COLOR_GRAY_300, COLOR_GREEN_100 } from '../constants/colors';
import { API_LINK } from '../constants/index';
import { useDebounce } from '../../../hooks/';
import { Product } from '../types';
import ProductElement from './ProductElement';
import { StyledAccountButton } from './styled';
import { fetchProducts } from '../../../utils';

type HeaderProps = {
  setCurrentPage?: (value: number) => void;
};

const AppHeader: FC<HeaderProps> = ({ setCurrentPage }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchItems, setSearchItems] = useState<Product[]>([]);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const debouncedSearch = useDebounce(inputValue, 600);

  useEffect(() => {
    const url = API_LINK + 'products?query=';
    fetchProducts(url + debouncedSearch).then(data => {
      setSearchItems(data.products);
      setDropdown(true);
    });
  }, [debouncedSearch]);

  useEffect(() => {
    if (!inputValue.length) {
      setDropdown(false);
    }
  }, [inputValue]);

  const closeDropdownOnQuery = useCallback(() => {
    setDropdown(false);
    if (setCurrentPage) setCurrentPage(1);
  }, [setCurrentPage]);

  const openDropdown = useCallback(() => {
    if (inputValue.length) setDropdown(true);
  }, [inputValue.length]);

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
          onFocus={openDropdown}
          value={inputValue}
        />
        <BasicLink to={'/products/' + inputValue}>
          <StyledSearchButton color={COLOR_GREEN_100} onClick={closeDropdownOnQuery}>
            Search!
          </StyledSearchButton>
        </BasicLink>

        <StyledSearchDropdown visible={dropDown} direction='column'>
          {searchItems.length > 0 ? (
            searchItems.map((item: Product) => <ProductElement key={item.id} item={item} />)
          ) : (
            <StyledDropdownItem>Sorry, no items were found...</StyledDropdownItem>
          )}
        </StyledSearchDropdown>
      </StyledSearchField>
      <BasicLink to={'/login'}>
        <StyledAccountButton outline textColor={COLOR_GRAY_300}>
          Log in
        </StyledAccountButton>
      </BasicLink>
    </StyledHeader>
  );
};

export default AppHeader;
