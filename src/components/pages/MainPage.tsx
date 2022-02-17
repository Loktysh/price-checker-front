import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { AppFooter } from '../common/AppFooter';
import AppHeader from '../common/AppHeader';
import { COLOR_GRAY_100 } from '../common/constants/colors';

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
      <Outlet />
      <AppFooter />
    </MainContainer>
  );
};

export default MainPage;
