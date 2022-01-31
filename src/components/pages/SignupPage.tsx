import React, { useCallback } from 'react';

import styled from 'styled-components';
import { AuthForm } from '../common/AuthForm';
import { COLOR_GRAY_100 } from '../common/constants/colors';
import { AuthFormParams } from '../common/types';

// TODO: Implement main page for auth forms
const AuthPageContainer = styled.div`
  background-color: ${COLOR_GRAY_100};
  height: 80rem;
  display: flex;
`;

export const SignupPage = () => {
  const handleSubmit = useCallback(async (params: AuthFormParams) => {
    const response = await fetch('http://localhost:3001/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(params),
    });

    const result = await response.text();
    console.log(result);
  }, []);

  return (
    <AuthPageContainer>
      <AuthForm type='signup' onAuthSubmit={handleSubmit} />
    </AuthPageContainer>
  );
};
