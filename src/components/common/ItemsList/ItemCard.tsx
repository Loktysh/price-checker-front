import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { getProductRating } from '../../../utils';
import { Flex, StyledItemLink, StyledStar } from '../../typography';
import { IState, Product } from '../types';
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

const ItemCard: FC<{ item: Product } & { token: string }> = ({ item, token }) => {
  const { image, extended_name, rating, id, price_min } = item;
  const [ratingArr, itemRating] = getProductRating(rating);
  const [isTracked, setIsTracked] = useState<boolean>(false);

  const handleTrackClick = () => {
    // TODO: implement add to tracked list
    console.log(`Bearer ${token}`);
    setIsTracked(prev => !prev);
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

const mapState = (state: IState) => {
  return {
    token: state.bearerToken,
  };
};

export default connect(mapState)(ItemCard);
