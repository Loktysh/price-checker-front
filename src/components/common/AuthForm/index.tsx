import React from 'react';
import { Flex } from '../../typography';
import {
  BasicLinkStyle,
  FormTitle,
  OptionalStyledDiv,
  StyledButton,
  StyledCheckbox,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRememberOptionContainer,
} from './styled';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export const AuthForm = ({ type }: AuthFormProps) => {
  return (
    <StyledForm>
      <Flex direction='column' gap='3rem'>
        <FormTitle>{type === 'login' ? 'LOGIN' : 'SIGN UP'}</FormTitle>
        <StyledInput id='login' type='text' placeholder='Username' />
        <StyledInput id='password' type='password' placeholder='Password' />
        <OptionalStyledDiv>
          <StyledRememberOptionContainer>
            <StyledCheckbox type='checkbox' name='remember' id='remember-user' />
            <StyledLabel htmlFor='remember-user'>Remember me</StyledLabel>
          </StyledRememberOptionContainer>
          {type === 'login' && <BasicLinkStyle href='#'>Forgot password?</BasicLinkStyle>}
        </OptionalStyledDiv>
        <StyledButton>Login</StyledButton>
        <BasicLinkStyle href='#'>
          {type === 'login' ? 'No account?' : 'Have an account?'}
        </BasicLinkStyle>
      </Flex>
    </StyledForm>
  );
};
