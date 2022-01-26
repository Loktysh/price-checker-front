import React, { useState, useEffect, useRef } from 'react';
import { StyledHeading, StyledItemsPage, StyledItemsWrapper } from './styled';
import { useParams } from 'react-router-dom';
import { API_LINK } from '../constants';
import { fetchProducts } from '../../../utils';
import { Product } from '../types';
import { Button, StyledScrollBar } from '../../typography';
import ItemCard from './ItemCard';
import { StyledHistoryPanel } from '../historyPanel/styled';

const ItemsList: React.FC = () => {
  const { query } = useParams();

  const [foundItems, setFoundItems] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const scrollRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    fetchProducts(API_LINK + query + `&page=${currentPage}`).then(data => {
      setFoundItems(data.products);
      scrollToTop();
    });
  }, [query, currentPage]);

  const loadNextPage = () => {
    setCurrentPage(page => page + 1);
    fetchProducts(API_LINK + query + `&page=${currentPage}`).then(data => {
      setFoundItems(items => [...items, ...data.products]);
    });
  };

  const scrollToTop = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  return (
    <>
      <StyledScrollBar>
        <StyledHeading>Search results:</StyledHeading>
        <StyledItemsPage>
          <StyledItemsWrapper ref={scrollRef} gap='40px 20px' justifyItems='start'>
            {foundItems.map((elem, index) => {
              return <ItemCard elem={elem} key={index}></ItemCard>;
            })}
          </StyledItemsWrapper>
          <StyledHistoryPanel />
        </StyledItemsPage>

        <Button outline onClick={loadNextPage}>
          Load more items
        </Button>
      </StyledScrollBar>
    </>
  );
};

export default ItemsList;
