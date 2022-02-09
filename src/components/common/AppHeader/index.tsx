import {
  StyledHeader,
  StyledHeaderName,
  StyledSearchField,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchDropdown,
  StyledDropdownItem,
  StyledHistoryButton,
} from './styled';
import React, { FC, useState, useEffect, useCallback, ChangeEvent } from 'react';
import { COLOR_GRAY_300, COLOR_GREEN_100 } from '../constants/colors';
import { API_LINK } from '../constants/index';
import { useDebounce } from '../../../hooks/';
import { IState, Product } from '../types';
import ProductElement from './ProductElement';
import { StyledAccountButton } from './styled';
import { connect } from 'react-redux';
import LoginDropdown from './LoginDropdown';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../utils';
import { Button } from '../../typography';

type ILoginLink = {
  isLinkEnabled: boolean;
  children: JSX.Element;
};

type HeaderProps = {
  setCurrentPage?: (value: number) => void;
  setHistoryOpen?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  logged: boolean;
  login: string;
};

const ConditionalLoginLink: FC<ILoginLink> = ({ isLinkEnabled, children }) => {
  if (!isLinkEnabled) {
    return <Link to={'/login'}>{children}</Link>;
  } else {
    return children;
  }
};

const AppHeader: FC<HeaderProps> = ({ setHistoryOpen, setCurrentPage, logged, login }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchItems, setSearchItems] = useState<Product[]>([]);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const [loginDropdown, setLoginDropdown] = useState<boolean>(false);
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

  const openLoginDropdown = useCallback(() => {
    if (logged) {
      setLoginDropdown(prevState => !prevState);
    }
  }, [logged]);

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
        <Link to={'/products/' + inputValue}>
          <StyledSearchButton color={COLOR_GREEN_100} onClick={closeDropdownOnQuery}>
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
      {logged && setHistoryOpen ? (
        <StyledHistoryButton outline onClick={() => setHistoryOpen(prev => !prev)}>
          Show history
        </StyledHistoryButton>
      ) : null}
      <ConditionalLoginLink isLinkEnabled={logged}>
        <StyledAccountButton outline onClick={openLoginDropdown} textColor={COLOR_GRAY_300}>
          {logged ? login : 'Log in'}
          {loginDropdown ? <LoginDropdown /> : null}
        </StyledAccountButton>
      </ConditionalLoginLink>
    </StyledHeader>
  );
};

const mapState = (state: IState) => {
  return {
    logged: state.logged,
    login: state.login,
  };
};

export default connect(mapState)(AppHeader);
