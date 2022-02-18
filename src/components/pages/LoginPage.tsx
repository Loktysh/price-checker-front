import React from 'react';

import styled from 'styled-components';
import { AuthForm } from '../common/AuthForm';
import { handleAuthSubmit } from '../common/AuthForm/authResponse';

// TODO: Implement main page for auth forms
const AuthPageContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const LoginPage = () => {
  return (
    <AuthPageContainer>
      <AuthForm type='login' onAuthSubmit={handleAuthSubmit} />
    </AuthPageContainer>
  );
};
