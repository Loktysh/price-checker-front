import React, { useState, useEffect } from 'react';
import { StyledHeading, StyledItemsPage, StyledItemsWrapper, StyledRelatedItems } from './styled';
import { useParams } from 'react-router-dom';
import { API_LINK } from '../constants';
import { fetchProducts } from '../../../utils';
import { Product } from '../types';
import { Button, Flex, Grid } from '../../typography';
import ItemCard from './ItemCard';

const ItemsList: React.FC = () => {
  const { query } = useParams();

  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const [foundItems, setFoundItems] = useState<Product[]>([]);

  useEffect(() => {
    setSearchQuery(query);
    fetchProducts(API_LINK + query).then(data => {
      setFoundItems(data.products);
      console.log(foundItems);
    });
  }, [query]);

  return (
    <>
      <StyledHeading>Search results:</StyledHeading>
      <StyledItemsPage>
        <StyledItemsWrapper columns='3' repeat gap='40px 20px'>
          {foundItems.map((elem, index) => {
            if (index < foundItems.length - 1) {
              return <ItemCard elem={elem}></ItemCard>;
            }
          })}
        </StyledItemsWrapper>
        <StyledRelatedItems>
          <p>Related items</p>
        </StyledRelatedItems>
      </StyledItemsPage>

      <Button outline>Load more items</Button>
    </>
  );
};

export default ItemsList;
