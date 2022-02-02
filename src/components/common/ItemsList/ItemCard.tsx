import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { getProductRating } from '../../../utils';
import { StyledStar } from '../../typography';
import { Product } from '../types';
import { StyledItemCard, StyledItemDescription, StyledItemImage, StyledItemName } from './styled';

const ItemCard: FC<{ item: Product }> = ({ item }) => {
  const { image, name, description, rating, id } = item;
  const [ratingArr, itemRating] = getProductRating(rating);

  return (
    <Link to={'/product/' + id}>
      <StyledItemCard>
        <StyledItemImage bgImage={image}></StyledItemImage>
        <StyledItemName>{name}</StyledItemName>
        <StyledItemDescription>{description}</StyledItemDescription>
        <div>{itemRating}.0</div>
        {ratingArr.map((elem, index) => {
          return <StyledStar enabled={elem.toString()} key={index}></StyledStar>;
        })}
      </StyledItemCard>
    </Link>
  );
};

export default ItemCard;
