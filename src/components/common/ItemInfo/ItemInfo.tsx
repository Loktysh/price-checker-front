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
  StyledChartContainer,
  StyledDescription,
  StyledRatingContainer,
} from './styled';
import PriceChart from './components/PriceChart';
import { API_LINK } from '../constants';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { Product, ProductPrice } from '../types';
import { Spinner } from '../../typography';
import StarRating from '../StarRating/StarRating';
import { useProductRating } from '../../../hooks/useProductRating';
import { COLOR_GRAY_300, COLOR_GREEN_100 } from '../constants/colors';
import { useFixedDescription } from '../../../hooks/useFixedDescription';
import { fetchTrack, getStorageItem, toggleItemTrack } from '../../../utils';
import { PriceChartItem } from '../types/index';
import { StyledChartButtons } from './styled';

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
  const [productPrices, setProductPrices] = useState<PriceChartItem[] | undefined>(undefined);

  useEffect(() => {
    const itemId = currentProduct?.id.toString();
    setIsTracked(trackedItems.includes(itemId as string));
    setProductPrices(currentProduct?.prices.charts);
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
          <StyledRatingContainer>
            <StarRating ratingArr={ratingArr} />
            <StyledParagraph>Product rating based on users: {rating}.0</StyledParagraph>
          </StyledRatingContainer>
          <StyledParagraph>Product description:</StyledParagraph>
          <StyledDescription>{fixedDescription}</StyledDescription>
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
        <StyledChartButtons>
          <StyledParagraph>View product price chart and compare prices:</StyledParagraph>
          <StyledChartButton
            onClick={() => {
              setProductPrices(currentProduct?.prices.charts);
            }}
          >
            Onliner API (Monthly)
          </StyledChartButton>
          <StyledChartButton
            onClick={() => {
              setProductPrices(currentProduct?.prices.dbCharts);
            }}
          >
            Custom API (Weekly)
          </StyledChartButton>
          <StyledChartButton>Custom API (Daily)</StyledChartButton>
        </StyledChartButtons>
        <StyledChartContainer>
          <PriceChart data={productPrices} />
        </StyledChartContainer>
      </StyledChartCard>
    </>
  );
};

export default ItemInfo;
