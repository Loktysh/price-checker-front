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
`;

const MainPage = () => {
  return (
    <MainContainer>
      <AppHeader />
      <Outlet />
      <AppFooter userLogged={false} />
    </MainContainer>
  );
};

export default MainPage;
