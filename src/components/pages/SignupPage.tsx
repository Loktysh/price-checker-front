import React from 'react';

import styled from 'styled-components';
import { AuthForm } from '../common/AuthForm';
import { handleAuthSubmit } from '../common/AuthForm/authResponse';

// TODO: Implement main page for auth forms
const AuthPageContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const SignupPage = () => {
  return (
    <AuthPageContainer>
      <AuthForm type='signup' onAuthSubmit={handleAuthSubmit} />
    </AuthPageContainer>
  );
};
