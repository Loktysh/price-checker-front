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

export const SignupPage = () => {
  const handleSubmit = useCallback((params: any) => {
    console.log('Signup: ', JSON.stringify(params));
  }, []);

  return (
    <AuthPageContainer>
      <AuthForm type='signup' onAuthSubmit={handleSubmit} />
    </AuthPageContainer>
  );
};
