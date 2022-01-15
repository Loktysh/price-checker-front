import React, { useCallback } from 'react';

import styled from 'styled-components';
import { AuthForm } from '../common/AuthForm';
import { COLOR_GRAY_100 } from '../common/constants/colors';

// TEMP
const AuthPageContainer = styled.div`
  background-color: ${COLOR_GRAY_100};
  height: 80rem;
  display: flex;
`;

export const LoginPage = () => {
  const handleSubmit = useCallback((params: any) => {
    console.log('Login: ', JSON.stringify(params));
  }, []);

  return (
    <AuthPageContainer>
      <AuthForm type='login' onAuthSubmit={handleSubmit} />
    </AuthPageContainer>
  );
};
