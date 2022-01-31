import React, { useState } from 'react';
import AppHeader from '../common/AppHeader';
import ItemsList from '../common/ItemsList';

const ItemsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <AppHeader setCurrentPage={setCurrentPage} />
      <ItemsList currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default ItemsPage;
