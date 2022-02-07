import React, { useCallback, useState } from 'react';

import styled from 'styled-components';
import { AuthForm } from '../common/AuthForm';
import { handleAuthSubmit } from '../common/AuthForm/authResponse';
import { COLOR_GRAY_100 } from '../common/constants/colors';

// TODO: Implement main page for auth forms
const AuthPageContainer = styled.div`
  background-color: ${COLOR_GRAY_100};
  height: 80rem;
  display: flex;
`;

export const LoginPage = () => {
  const [authError, setAuthError] = useState('');

  const onAuthSubmit = useCallback((params, type) => {
    handleAuthSubmit(params, type).catch(err => setAuthError(err.message));
  }, []);
  return (
    <AuthPageContainer>
      <AuthForm type='login' onAuthSubmit={onAuthSubmit} authError={authError} />
    </AuthPageContainer>
  );
};
