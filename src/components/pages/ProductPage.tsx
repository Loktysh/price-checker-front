import React, { useState } from 'react';
import styled from 'styled-components';
import { AppFooter } from '../common/AppFooter';

import AppHeader from '../common/AppHeader';
import HistoryPanel from '../common/historyPanel';
import ItemInfo from '../common/ItemInfo';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ProductPage = () => {
  const [historyOpen, setHistoryOpen] = useState<boolean>(false);

  return (
    <Container>
      <HistoryPanel open={historyOpen} setHistoryOpen={setHistoryOpen} />
      <AppHeader setHistoryOpen={setHistoryOpen} />
      <ItemInfo />
      <AppFooter />
    </Container>
  );
};

export default ProductPage;
