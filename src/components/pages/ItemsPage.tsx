import React, { useState } from 'react';
import { AppFooter } from '../common/AppFooter';
import AppHeader from '../common/AppHeader';
import HistoryPanel from '../common/historyPanel';
import ItemsList from '../common/ItemsList';

const ItemsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [historyOpen, setHistoryOpen] = useState<boolean>(false);

  return (
    <>
      <HistoryPanel open={historyOpen} setHistoryOpen={setHistoryOpen} />
      <AppHeader setCurrentPage={setCurrentPage} setHistoryOpen={setHistoryOpen} />
      <ItemsList currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <AppFooter />
    </>
  );
};

export default ItemsPage;
