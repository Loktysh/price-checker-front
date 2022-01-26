import React from 'react';
import { useParams } from 'react-router-dom';

const ItemInfo = () => {
  const { id } = useParams();

  return <h1>item info about {id}</h1>;
};

export default ItemInfo;
