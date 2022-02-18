import React, { FC } from 'react';
import { useProductRating } from '../../../hooks/useProductRating';
import { Flex, StyledItemLink } from '../../typography';
import StarRating from '../StarRating/StarRating';
import { Product } from '../types';
import {
  StyledDropdownItem,
  StyledDropdownImage,
  StyledRating,
  StyledItemName,
  StyledItemPrice,
} from './styled';

type ProductElementProps = {
  item: Product;
  closeDropdownOnQuery: () => void;
};

const ProductElement: FC<ProductElementProps> = ({ item, closeDropdownOnQuery }) => {
  const [ratingArr, itemRating] = useProductRating(item.rating);

  return (
    <StyledDropdownItem justify='flex-start' onClick={() => closeDropdownOnQuery()}>
      <StyledItemLink to={'/product/' + item.key}>
        <StyledDropdownImage bgImage={item.image}></StyledDropdownImage>
        <Flex direction='column' alignItems='flex-start'>
          <StyledItemName>{item.extended_name}</StyledItemName>
          <StyledItemPrice>От {item.price_min} BYN</StyledItemPrice>

          <Flex direction='row'>
            <StyledRating>Рейтинг: {itemRating}.0</StyledRating>
            <StarRating ratingArr={ratingArr} />
          </Flex>
        </Flex>
      </StyledItemLink>
    </StyledDropdownItem>
  );
};

export default ProductElement;
