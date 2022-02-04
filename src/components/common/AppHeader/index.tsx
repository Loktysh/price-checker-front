import {
  StyledHeader,
  StyledHeaderName,
  StyledSearchField,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchDropdown,
  StyledDropdownItem,
} from './styled';
import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { COLOR_GRAY_300, COLOR_GREEN_100 } from '../constants/colors';
import { API_LINK } from '../constants/index';
import { useDebounce } from '../../../hooks/';
import { Product, ItemsData } from '../types';
import ProductElement from './ProductElement';
import { StyledAccountButton } from './styled';
import { connect } from 'react-redux';

type IState = {
  logged: boolean;
  login: string;
};

const AppHeader: FC<IState> = ({ logged, login }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchItems, setSearchItems] = useState<Product[]>([]);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const debouncedSearch = useDebounce(inputValue, 600);

  console.log(login);

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
      <StyledAccountButton outline textColor={COLOR_GRAY_300}>
        {login}
      </StyledAccountButton>
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
