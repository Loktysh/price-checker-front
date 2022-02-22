import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Flex, StyledItemLink } from '../../typography';
import { Product } from '../types';
import {
  StyledItemCard,
  StyledItemImage,
  StyledItemName,
  StyledItemPrice,
  StyledItemRating,
  StyledTrackButton,
  RemoveButton,
  AddButton,
  StyledTrackInfo,
  StyledTrackMessage,
} from './styled';
import { fetchTrack, getStorageItem, toggleItemTrack } from '../../../utils';
import { useProductRating } from '../../../hooks/useProductRating';
import StarRating from '../StarRating/StarRating';

type ItemCardProps = {
  item: Product;
};

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const { image, extended_name, rating, price_min, key } = item;
  const [ratingArr, itemRating] = useProductRating(rating);
  const [isTracked, setIsTracked] = useState<boolean>(false);
  const [infoVisible, setInfoVisible] = useState<boolean>(false);
  const token = getStorageItem('token');
  const renewToken = getStorageItem('renewToken');
  const allTrackedItems = useSelector((state: RootState) => state.tracking.tracked);

  useEffect(() => {
    if (allTrackedItems.includes(key.toString())) setIsTracked(true);
  }, [allTrackedItems, key]);

  const handleTrackClick = async () => {
    const action = isTracked ? 'untrack' : 'track';

    toggleItemTrack(action, item.key);

    if (token && renewToken) {
      fetchTrack(token, renewToken, action, key).then(() => {
        setIsTracked(!isTracked);
        setInfoVisible(true);
        setTimeout(() => {
          setInfoVisible(false);
        }, 1000);
      });
    }
  };

  return (
    <StyledItemCard>
      <StyledItemImage bgImage={image}>
        <StyledTrackButton onClick={handleTrackClick}>
          {isTracked ? <RemoveButton /> : <AddButton />}
        </StyledTrackButton>
        <StyledTrackInfo visible={infoVisible}>
          <StyledTrackMessage>
            Product successfully {isTracked ? 'tracked' : 'untracked'}!
          </StyledTrackMessage>
        </StyledTrackInfo>
      </StyledItemImage>
      <Flex justify='space-between'>
        <StyledItemLink to={'/product/' + key}>
          <StyledItemName>{extended_name}</StyledItemName>
          <StyledItemPrice>От {price_min} BYN</StyledItemPrice>
        </StyledItemLink>
      </Flex>
      <Flex justify='flex-start' alignItems='center'>
        <StyledItemRating>Оценка: {itemRating}.0</StyledItemRating>
        <StarRating ratingArr={ratingArr} />
      </Flex>
    </StyledItemCard>
  );
};

export default ItemCard;
