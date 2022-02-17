import React, { FC, useState, useEffect, useRef } from 'react';
import {
  StyledHeading,
  StyledItemContainer,
  StyledItemsPage,
  StyledItemsWrapper,
  StyledLoadButton,
} from './styled';
import { useParams } from 'react-router-dom';
import { API_LINK } from '../constants';
import { fetchProducts } from '../../../utils';
import { Product } from '../types';
import { Spinner, StyledScrollBar } from '../../typography';
import ItemCard from './ItemCard';
import { StyledHistoryPanel } from '../historyPanel/styled';
import { COLOR_GREEN_100 } from '../constants/colors';

type ItemsProps = {
  setCurrentPage: (value: number | ((prevVar: number) => number)) => void;
  currentPage: number;
};

const ItemsList: FC<ItemsProps> = ({ setCurrentPage, currentPage }) => {
  const { query } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [foundItems, setFoundItems] = useState<Product[]>([]);
  const scrollRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);

    fetchProducts(API_LINK + `products?query=${query}&page=${currentPage}`).then(data => {
      if (currentPage === 1) {
        setFoundItems(data.products);
        scrollToTop();
      } else {
        setFoundItems(prev => [...prev, ...data.products]);
      }
      setLoading(false);
    });
  }, [query, currentPage]);

  const scrollToTop = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  return (
    <>
      <StyledScrollBar>
        <StyledHeading>Search results for: {`'${query}'`}</StyledHeading>
        <StyledItemsPage justify='flex-start'>
          <StyledItemContainer direction='column'>
            <StyledItemsWrapper
              ref={scrollRef}
              gap='40px 20px'
              justifyItems='start'
              repeat
              columns='4'
            >
              {foundItems.map((item: Product) => {
                return <ItemCard item={item} key={item.id}></ItemCard>;
              })}
            </StyledItemsWrapper>
            <StyledLoadButton
              color={COLOR_GREEN_100}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {!loading ? 'Load more items' : <Spinner color='white' size='2rem' />}
            </StyledLoadButton>
          </StyledItemContainer>
        </StyledItemsPage>
      </StyledScrollBar>
    </>
  );
};

export default ItemsList;
