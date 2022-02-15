import React from 'react';

import styled from 'styled-components';
import { AuthForm } from '../common/AuthForm';
import { handleAuthSubmit } from '../common/AuthForm/authResponse';
import { COLOR_GRAY_100 } from '../common/constants/colors';

// TODO: Implement main page for auth forms
const AuthPageContainer = styled.div`
  display: flex;
  height: 58rem;
`;

export const SignupPage = () => {
  return (
    <AuthPageContainer>
      <AuthForm type='signup' onAuthSubmit={handleAuthSubmit} />
    </AuthPageContainer>
  );
};
