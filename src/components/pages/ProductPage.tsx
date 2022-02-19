import React from 'react';
import styled from 'styled-components';
import { AppFooter } from '../common/AppFooter';

import AppHeader from '../common/AppHeader';
import ItemInfo from '../common/ItemInfo';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ProductPage = () => {
  return (
    <Container>
      <AppHeader />
      <ItemInfo />
      <AppFooter />
    </Container>
  );
};

export default ProductPage;
