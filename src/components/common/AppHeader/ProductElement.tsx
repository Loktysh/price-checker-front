import React from 'react';
import { Flex } from '../../typography';
import { Product } from '../types';
import {
  StyledDropdownItem,
  StyledDropdownImage,
  StyledItemLink,
  StyledStar,
  StyledStarContainer,
} from './styled';

const ProductElement: React.FC<{ item: Product }> = props => {
  const { item } = props;

  const itemRating = Math.floor(item.rating / 10);

  const ratingArr = new Array(5).fill(false).map((_, index) => {
    if (index <= itemRating - 1) {
      return true;
    } else {
      return false;
    }
  });

  // TODO: implement routing eg /items/<productid>

  return (
    <StyledDropdownItem justify='flex-start'>
      <StyledItemLink to='/items'>
        <StyledDropdownImage bgImage={item.image}></StyledDropdownImage>
        <Flex direction='column' alignItems='flex-start'>
          <Flex>
            <h3>{item.name}</h3>
            <StyledStarContainer direction='row'>
              {ratingArr.map((elem, index) => {
                return <StyledStar enabled={elem} key={index} />;
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
