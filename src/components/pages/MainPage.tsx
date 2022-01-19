import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../common/AppHeader';

const MainPage = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

export default MainPage;
