import React, { useEffect, useState } from 'react';
import AppHeader from '../common/AppHeader';
import ItemsList from '../common/ItemsList';

const ItemsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <>
      <AppHeader setCurrentPage={setCurrentPage} />
      <ItemsList currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default ItemsPage;
