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
} from './styled';
import { trackItem, untrackItem } from '../../../store/slices/productsSlice';

type ItemCardProps = {
  item: Product;
};

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const { image, extended_name, rating, id, price_min } = item;
  const [ratingArr, itemRating] = getProductRating(rating);
  const [isTracked, setIsTracked] = useState<boolean>(false);
  const token = useSelector((state: RootState) => state.login.userToken);
  const renewToken = useSelector((state: RootState) => state.login.userRenewToken);
  const allTrackedItems = useSelector((state: RootState) => state.tracking.tracked);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allTrackedItems.includes(item.key)) setIsTracked(true);
  }, [allTrackedItems, item.key]);

  const handleTrackClick = async () => {
    const action = isTracked ? 'untrack' : 'track';
    const params = { product: item.id, action: action };
    const URL = API_LINK + 'products/track';

    toggleItemTrack(action);
    setIsTracked(!isTracked);

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token + ' ' + renewToken}`,
      },
      body: JSON.stringify(params),
    });

    const result = await response.json();
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
