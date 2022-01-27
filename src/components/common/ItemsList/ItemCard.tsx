import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { getProductRating } from '../../../utils';
import { StyledStar } from '../../typography';
import { Product } from '../types';
import { StyledItemCard, StyledItemDescription, StyledItemImage, StyledItemName } from './styled';

const ItemCard: FC<{ elem: Product }> = ({ elem }) => {
  const { image, name, description, rating, id } = elem;
  const [ratingArr, itemRating] = getProductRating(rating);

  return (
    <Link to={'/product/' + elem.id}>
      <StyledItemCard>
        <StyledItemImage bgImage={image}></StyledItemImage>
        <StyledItemName>{name}</StyledItemName>
        <StyledItemDescription>{description}</StyledItemDescription>
        {ratingArr.map((elem, index) => {
          return <StyledStar enabled={elem.toString()} key={index}></StyledStar>;
        })}
      </StyledItemCard>
    </Link>
  );
};

export default ItemCard;
