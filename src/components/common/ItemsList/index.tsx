import React, { useState, useEffect } from 'react';
import { StyledHeading, StyledItemsPage, StyledItemsWrapper, StyledRelatedItems } from './styled';
import { useParams } from 'react-router-dom';
import { API_LINK } from '../constants';
import { fetchProducts } from '../../../utils';
import { Product } from '../types';
import { Button, Flex, Grid } from '../../typography';
import ItemCard from './ItemCard';

const ItemsList: React.FC = () => {
  const { id } = useParams();

  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const [foundItems, setFoundItems] = useState<Product[]>([]);

  useEffect(() => {
    setSearchQuery(id);
    fetchProducts(API_LINK + id).then(data => {
      setFoundItems(data.products);
      console.log(foundItems);
    });
  }, [id]);

  return (
    <>
      <StyledHeading>Search results:</StyledHeading>
      <StyledItemsPage>
        <StyledItemsWrapper columns='3' repeat gap='40px 20px'>
          {foundItems.map((elem, index) => {
            if (index < foundItems.length - 1) {
              return (
                <ItemCard
                  key={elem.id}
                  name={elem.name}
                  desc={elem.extended_name}
                  bgImage={elem.image}
                  rating={elem.rating}
                ></ItemCard>
              );
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
