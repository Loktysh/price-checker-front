import React, { useState, useEffect } from 'react';
import { StyledHeading } from './styled';
import { useParams } from 'react-router-dom';
import { API_LINK } from '../constants';
import { fetchProducts } from '../../../utils';
import { Product } from '../types';

const ItemsList: React.FC = () => {
  const { id } = useParams();

  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const [foundItems, setFoundItems] = useState<Product[]>([]);

  useEffect(() => {
    setSearchQuery(id);
    fetchProducts(API_LINK + id).then(data => {
      setFoundItems(data.products);
    });
  }, [id]);

  return <StyledHeading>Search results:</StyledHeading>;
};

export default ItemsList;
