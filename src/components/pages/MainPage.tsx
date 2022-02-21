import React from 'react';
import styled from 'styled-components';
import { AppFooter } from '../common/AppFooter';
import AppHeader from '../common/AppHeader';
import { COLOR_GRAY_100 } from '../common/constants/colors';
import AppLanding from '../common/AppLanding';

const MainContainer = styled.div`
  background-color: ${COLOR_GRAY_100};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <AppHeader />
      <AppLanding />
      <AppFooter />
    </MainContainer>
  );
};

export default MainPage;
