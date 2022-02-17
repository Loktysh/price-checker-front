import React, { FC } from 'react';
import { useProductRating } from '../../../hooks/useProductRating';
import { Flex, StyledItemLink } from '../../typography';
import StarRating from '../StarRating/StarRating';
import { Product } from '../types';
import { StyledDropdownItem, StyledDropdownImage, StyledRating } from './styled';

type ProductElementProps = {
  item: Product;
};

const ProductElement: FC<ProductElementProps> = ({ item }) => {
  const [ratingArr, itemRating] = useProductRating(item.rating);

  return (
    <StyledDropdownItem justify='flex-start'>
      <StyledItemLink to={'/product/' + item.key}>
        <StyledDropdownImage bgImage={item.image}></StyledDropdownImage>
        <Flex direction='column' alignItems='flex-start'>
          <p>{item.extended_name}</p>
          <p>От {item.price_min} BYN</p>

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
