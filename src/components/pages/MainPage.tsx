import React from 'react';
import AppHeader from '../common/AppHeader';
import { AuthForm } from '../common/AuthForm';
import { AuthPage } from './AuthPage';

const MainPage = () => {
  return (
    <>
      <AppHeader />
      <AuthPage>
        <AuthForm type='login' />
      </AuthPage>
    </>
  );
};

export default MainPage;
