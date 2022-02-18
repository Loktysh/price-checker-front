import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledChartCard,
  StyledHeading,
  StyledInfoContainer,
  StyledProductImage,
  StyledWrapper,
  StyledParagraph,
  StyledTrackButton,
  StyledItemPrice,
  StyledPriceWrapper,
  StyledChartButton,
} from './styled';
import PriceChart from './components/PriceChart';
import { API_LINK } from '../constants';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { Product, ProductPrice } from '../types';
import { Flex, Spinner } from '../../typography';
import StarRating from '../StarRating/StarRating';
import { useProductRating } from '../../../hooks/useProductRating';
import { COLOR_GRAY_300, COLOR_GREEN_100 } from '../constants/colors';
import { useFixedDescription } from '../../../hooks/useFixedDescription';
import { fetchTrack, getStorageItem, toggleItemTrack } from '../../../utils';

type ExtendedProductInfo = Product & ProductPrice;

const ItemInfo = () => {
  const { key } = useParams();
  const [currentProduct, setCurrentProduct] = useState<ExtendedProductInfo | null>(null);
  const [isTracked, setIsTracked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = getStorageItem('token');
  const renewToken = getStorageItem('renewToken');
  const trackedItems = useSelector((state: RootState) => state.tracking.tracked);
  const [ratingArr, rating] = useProductRating(currentProduct?.rating);
  const fixedDescription = useFixedDescription(currentProduct?.description);

  useEffect(() => {
    const itemId = currentProduct?.id.toString();
    setIsTracked(trackedItems.includes(itemId as string));
    const URL = API_LINK + `product?key=${key}`;
    setIsLoading(true);
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setCurrentProduct(data);

        setIsLoading(false);
      });
  }, [trackedItems, currentProduct?.id, key]);

  const handleTrackClick = async () => {
    const action = isTracked ? 'untrack' : 'track';

    if (key) {
      toggleItemTrack(action, key);
    }

    if (token && renewToken && currentProduct) {
      fetchTrack(token, renewToken, action, currentProduct.id).then(() => {
        setIsTracked(!isTracked);
      });
    }
  };

  if (isLoading) {
    return (
      <StyledInfoContainer>
        <Spinner size='50px' color={COLOR_GREEN_100} />;
      </StyledInfoContainer>
    );
  }
  return (
    <>
      <StyledInfoContainer justify='space-between'>
        <StyledProductImage
          bgImage={currentProduct ? currentProduct.image : null}
        ></StyledProductImage>
        <StyledWrapper>
          <StyledHeading>{currentProduct?.extended_name}</StyledHeading>
          <Flex justify='flex-start' gap='2rem'>
            <StarRating ratingArr={ratingArr} />
            <StyledParagraph>Product rating based on users: {rating}.0</StyledParagraph>
          </Flex>
          <StyledParagraph>Product description:</StyledParagraph>
          <StyledParagraph>{fixedDescription}</StyledParagraph>
          <StyledPriceWrapper justify='flex-start'>
            <StyledItemPrice>
              Price: from BYN {currentProduct?.price_min} to BYN {currentProduct?.prices.max.amount}
            </StyledItemPrice>
            <StyledTrackButton
              color={isTracked ? COLOR_GRAY_300 : COLOR_GREEN_100}
              onClick={handleTrackClick}
            >
              {isTracked ? 'Untrack' : 'Track'}
            </StyledTrackButton>
          </StyledPriceWrapper>
        </StyledWrapper>
      </StyledInfoContainer>
      <StyledChartCard>
        <Flex gap='2rem'>
          <StyledParagraph>View product price chart and compare prices:</StyledParagraph>
          <StyledChartButton>Onliner API (Monthly)</StyledChartButton>
          <StyledChartButton>Custom API (Weekly)</StyledChartButton>
          <StyledChartButton>Custom API (Daily)</StyledChartButton>
        </Flex>
        <PriceChart data={currentProduct?.prices.charts} />
      </StyledChartCard>
    </>
  );
};

export default ItemInfo;
