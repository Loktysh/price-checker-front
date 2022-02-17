import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Flex, StyledItemLink } from '../../typography';
import { API_LINK } from '../constants';
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
import { trackItem, untrackItem } from '../../../store/slices/productsSlice';
import { fetchTrack, getStorageItem } from '../../../utils/index';
import { useProductRating } from '../../../hooks/useProductRating';
import StarRating from '../StarRating/StarRating';

type ItemCardProps = {
  item: Product;
};

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const { image, extended_name, rating, id, price_min, key } = item;
  const [ratingArr, itemRating] = useProductRating(rating);
  const [isTracked, setIsTracked] = useState<boolean>(false);
  const [infoVisible, setInfoVisible] = useState<boolean>(false);
  const token = getStorageItem('token');
  const renewToken = getStorageItem('renewToken');
  const allTrackedItems = useSelector((state: RootState) => state.tracking.tracked);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allTrackedItems.includes(id.toString())) setIsTracked(true);
  }, [allTrackedItems, id]);

  const handleTrackClick = async () => {
    const action = isTracked ? 'untrack' : 'track';

    toggleItemTrack(action);

    if (token && renewToken) {
      fetchTrack(token, renewToken, action, id).then(() => {
        setIsTracked(!isTracked);
        setInfoVisible(true);
        setTimeout(() => {
          setInfoVisible(false);
        }, 1000);
      });
    }
  };

  const toggleItemTrack = (actionType: string) => {
    if (actionType === 'track') {
      dispatch(trackItem(item.key));
    } else if (actionType === 'untrack') {
      dispatch(untrackItem(item.key));
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
