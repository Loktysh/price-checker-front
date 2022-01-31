import React, { FC } from 'react';
import { Flex } from '../../typography';
import { RATING_DIVISOR } from '../constants';
import { Product } from '../types';
import {
  StyledDropdownItem,
  StyledDropdownImage,
  StyledItemLink,
  StyledStar,
  StyledStarContainer,
} from './styled';

const ProductElement: FC<{ item: Product }> = ({ item }) => {
  const itemRating = Math.floor(item.rating / RATING_DIVISOR);

  const ratingArr = new Array(5).fill(false).map((_, index) => index <= itemRating - 1);

  return (
    <StyledDropdownItem justify='flex-start'>
      <StyledItemLink to='/items'>
        <StyledDropdownImage bgImage={item.image}></StyledDropdownImage>
        <Flex direction='column' alignItems='flex-start'>
          <Flex>
            <h3>{item.name}</h3>
            <StyledStarContainer direction='row'>
              {ratingArr.map((elem, index) => (
                <StyledStar enabled={elem} key={index} />
              ))}
            </StyledStarContainer>
          </Flex>

          <p>{item.extended_name}</p>
          <p>От {item.price_min} BYN</p>
          <p>Рейтинг: {itemRating}.0</p>
        </Flex>
      </StyledItemLink>
    </StyledDropdownItem>
  );
};

export default ProductElement;
