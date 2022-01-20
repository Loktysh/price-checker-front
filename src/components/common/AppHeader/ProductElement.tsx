import React, { FC } from 'react';
import { getProductRating } from '../../../utils';
import { Flex, StyledStar } from '../../typography';
import { RATING_DIVISOR } from '../constants';
import { Product } from '../types';
import {
  StyledDropdownItem,
  StyledDropdownImage,
  StyledItemLink,
  StyledStarContainer,
} from './styled';

const ProductElement: FC<{ item: Product }> = ({ item }) => {
  const [ratingArr, itemRating] = getProductRating(item.rating);

  return (
    <StyledDropdownItem justify='flex-start'>
      <StyledItemLink to={'/product/' + item.id}>
        <StyledDropdownImage bgImage={item.image}></StyledDropdownImage>
        <Flex direction='column' alignItems='flex-start'>
          <Flex>
            <h3>{item.name}</h3>
            <StyledStarContainer direction='row'>
              {ratingArr.map((elem, index) => {
                return <StyledStar enabled={elem.toString()} key={index} />;
              })}
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
