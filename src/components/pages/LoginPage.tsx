import React from 'react';

import styled from 'styled-components';
import { AuthForm } from '../common/AuthForm';
import { handleAuthSubmit } from '../common/AuthForm/authResponse';
import { COLOR_GRAY_100 } from '../common/constants/colors';

// TODO: Implement main page for auth forms
const AuthPageContainer = styled.div`
  height: 58rem;
  display: flex;
`;

export const LoginPage = () => {
  return (
    <AuthPageContainer>
      <AuthForm type='login' onAuthSubmit={handleAuthSubmit} />
    </AuthPageContainer>
  );
};
