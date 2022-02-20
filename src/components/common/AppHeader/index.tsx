import {
  StyledHeader,
  StyledHeaderName,
  StyledSearchField,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchDropdown,
  StyledDropdownItem,
  StyledHistoryButton,
  BasicLink,
} from './styled';
import React, { FC, useState, useEffect, useCallback, ChangeEvent } from 'react';
import { COLOR_GRAY_300, COLOR_GREEN_100 } from '../constants/colors';
import { API_LINK } from '../constants/index';
import { useDebounce } from '../../../hooks/';
import { Product } from '../types';
import ProductElement from './ProductElement';
import { StyledAccountButton } from './styled';
import { useSelector } from 'react-redux';
import LoginDropdown from './LoginDropdown';
import { fetchProducts } from '../../../utils';
import { RootState } from '../../../store/store';
import LoginLink from './LoginLink';

type HeaderProps = {
  setCurrentPage?: (value: number) => void;
  setHistoryOpen?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const AppHeader: FC<HeaderProps> = ({ setCurrentPage, setHistoryOpen }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchItems, setSearchItems] = useState<Product[]>([]);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const [loginDropdown, setLoginDropdown] = useState<boolean>(false);
  const debouncedSearch = useDebounce(inputValue, 600);
  const logged = useSelector((state: RootState) => state.login.logged);
  const login = useSelector((state: RootState) => state.login.userLogin);

  useEffect(() => {
    const url = API_LINK + 'products?page=1&query=';
    if (debouncedSearch.length > 0) {
      fetchProducts(url + debouncedSearch).then(data => {
        setSearchItems(data.products);
        setDropdown(true);
      });
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (!inputValue.length) {
      setDropdown(false);
    }
  }, [inputValue]);

  const openLoginDropdown = useCallback(() => {
    if (logged) {
      setLoginDropdown(!loginDropdown);
    }
  }, [logged, loginDropdown]);

  const closeDropdownOnQuery = useCallback(() => {
    setDropdown(false);
    if (setCurrentPage) setCurrentPage(1);
  }, [setCurrentPage]);

  const openDropdown = useCallback(() => {
    if (inputValue.length) setDropdown(true);
  }, [inputValue.length]);

  return (
    <StyledHeader as='header' justify='space-around'>
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
            Search
          </StyledSearchButton>
        </BasicLink>

        <StyledSearchDropdown visible={dropDown} direction='column'>
          {searchItems.length > 0 ? (
            searchItems.map((item: Product) => (
              <ProductElement
                key={item.id}
                item={item}
                closeDropdownOnQuery={closeDropdownOnQuery}
              />
            ))
          ) : (
            <StyledDropdownItem>Sorry, no items were found...</StyledDropdownItem>
          )}
        </StyledSearchDropdown>
      </StyledSearchField>
      {logged && setHistoryOpen ? (
        <StyledHistoryButton outline onClick={() => setHistoryOpen(prev => !prev)}>
          Show history
        </StyledHistoryButton>
      ) : null}
      <LoginLink isLinkEnabled={logged}>
        <StyledAccountButton outline onClick={openLoginDropdown} textColor={COLOR_GRAY_300}>
          {logged ? login : 'Log in'}
          {loginDropdown && <LoginDropdown />}
        </StyledAccountButton>
      </LoginLink>
    </StyledHeader>
  );
};

export default AppHeader;
