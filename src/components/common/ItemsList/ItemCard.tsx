import React, { FC } from 'react';
import { getProductRating } from '../../../utils';
import { StyledStar } from '../../typography';
import { Product } from '../types';
import { StyledItemCard, StyledItemDescription, StyledItemImage, StyledItemName } from './styled';

const ItemCard: FC<{ elem: Product }> = ({ elem }) => {
  const { image, name, description, rating } = elem;
  const [ratingArr, itemRating] = getProductRating(rating);

  return (
    <StyledItemCard>
      <StyledItemImage bgImage={image}></StyledItemImage>
      <StyledItemName>{name}</StyledItemName>
      <StyledItemDescription>{description}</StyledItemDescription>
      {ratingArr.map((elem, index) => {
        return <StyledStar enabled={elem.toString()} key={index}></StyledStar>;
      })}
    </StyledItemCard>
  );
};

export default ItemCard;
