import React, { FC } from 'react';
import { getProductRating } from '../../../utils';
import { Flex, StyledStar } from '../../typography';
import { Product } from '../types';
import {
  StyledDropdownItem,
  StyledDropdownImage,
  StyledItemLink,
  StyledRating,
  StyledItemName,
  StyledItemPrice,
} from './styled';

const ProductElement: FC<{ item: Product }> = ({ item }) => {
  const [ratingArr, itemRating] = getProductRating(item.rating);

  return (
    <StyledDropdownItem justify='flex-start'>
      <StyledItemLink to={'/product/' + item.id}>
        <StyledDropdownImage bgImage={item.image}></StyledDropdownImage>
        <Flex direction='column' alignItems='flex-start'>
          <StyledItemName>{item.extended_name}</StyledItemName>
          <StyledItemPrice>От {item.price_min} BYN</StyledItemPrice>

          <Flex direction='row'>
            <StyledRating>Рейтинг: {itemRating}.0</StyledRating>
            {ratingArr.map((elem, index) => {
              return <StyledStar enabled={elem.toString()} key={index} />;
            })}
          </Flex>
        </Flex>
      </StyledItemLink>
    </StyledDropdownItem>
  );
};

export default ProductElement;
