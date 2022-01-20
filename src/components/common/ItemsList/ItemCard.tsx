import React, { FC } from 'react';
import { getProductRating } from '../../../utils';
import { StyledStar } from '../../typography';
import { StyledItemCard, StyledItemDescription, StyledItemImage, StyledItemName } from './styled';

type ItemInformation = {
  name: string;
  desc: string;
  bgImage: string;
  rating: number;
};

const ItemCard: FC<ItemInformation> = ({ name, desc, bgImage, rating }) => {
  const [ratingArr, itemRating] = getProductRating(rating);
  console.log(ratingArr);
  return (
    <StyledItemCard>
      <StyledItemImage bgImage={bgImage}></StyledItemImage>
      <StyledItemName>{name}</StyledItemName>
      <StyledItemDescription>{desc}</StyledItemDescription>
      {ratingArr.map((elem, index) => {
        return <StyledStar enabled={elem.toString()} key={index}></StyledStar>;
      })}
    </StyledItemCard>
  );
};

export default ItemCard;
