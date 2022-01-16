import React, { useCallback } from 'react';

import styled from 'styled-components';
import { AuthForm } from '../common/AuthForm';
import { COLOR_GRAY_100 } from '../common/constants/colors';
import { IFormInput } from '../common/types';

// TODO: Implement main page for auth forms
const AuthPageContainer = styled.div`
  background-color: ${COLOR_GRAY_100};
  height: 80rem;
  display: flex;
`;

export const LoginPage = () => {
  const handleSubmit = useCallback((params: IFormInput) => {
    JSON.stringify(params);
  }, []);

  return (
    <AuthPageContainer>
      <AuthForm type='login' onAuthSubmit={handleSubmit} />
    </AuthPageContainer>
  );
};
