import React, { FC } from 'react';
import { getProductRating } from '../../../utils';
import { Flex, StyledItemLink, StyledStar } from '../../typography';
import { Product } from '../types';
import { StyledDropdownItem, StyledDropdownImage, StyledRating } from './styled';

type ProductElementProps = {
  item: Product;
};

const ProductElement: FC<ProductElementProps> = ({ item }) => {
  const [ratingArr, itemRating] = getProductRating(item.rating);

  return (
    <StyledDropdownItem justify='flex-start'>
      <StyledItemLink to={'/product/' + item.id}>
        <StyledDropdownImage bgImage={item.image}></StyledDropdownImage>
        <Flex direction='column' alignItems='flex-start'>
          <p>{item.extended_name}</p>
          <p>От {item.price_min} BYN</p>

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
