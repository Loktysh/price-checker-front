import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { getProductRating } from '../../../utils';
import { Flex, StyledItemLink, StyledStar } from '../../typography';
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
import { getStorageItem } from '../../../utils/index';

type ItemCardProps = {
  item: Product;
};

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const { image, extended_name, rating, id, price_min } = item;
  const [ratingArr, itemRating] = getProductRating(rating);
  const [isTracked, setIsTracked] = useState<boolean>(false);
  const [infoVisible, setInfoVisible] = useState<boolean>(false);
  const token = getStorageItem('token');
  const renewToken = getStorageItem('renewToken');
  const allTrackedItems = useSelector((state: RootState) => state.tracking.tracked);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allTrackedItems.includes(item.id.toString())) setIsTracked(true);
  }, [allTrackedItems, item.id]);

  const handleTrackClick = async () => {
    const action = isTracked ? 'untrack' : 'track';
    const params = { product: item.id, action: action };
    const URL = API_LINK + 'products/track';

    toggleItemTrack(action);

    const response: Response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token + ' ' + renewToken}`,
      },
      body: JSON.stringify(params),
    });

    const result = await response.json().then(() => {
      setIsTracked(!isTracked);
      setInfoVisible(true);
      setTimeout(() => {
        setInfoVisible(false);
      }, 1000);
    });
    return result;
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
        <StyledItemLink to={'/product/' + id}>
          <StyledItemName>{extended_name}</StyledItemName>
          <StyledItemPrice>От {price_min} BYN</StyledItemPrice>
        </StyledItemLink>
      </Flex>
      <Flex justify='flex-start' alignItems='center'>
        <StyledItemRating>Оценка: {itemRating}.0</StyledItemRating>
        {ratingArr.map((elem, index) => {
          return <StyledStar enabled={elem.toString()} key={index}></StyledStar>;
        })}
      </Flex>
    </StyledItemCard>
  );
};

export default ItemCard;
