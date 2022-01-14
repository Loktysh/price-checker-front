import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Flex } from '../../typography';
import {
  BasicLinkStyle,
  FormTitle,
  OptionalStyledDiv,
  StyledButton,
  StyledCheckbox,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRememberOptionContainer,
} from './styled';

interface AuthFormProps {
  type: 'login' | 'signup';
}

interface IFormInput {
  username: string;
  password: string;
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column' gap='3rem'>
        <FormTitle>{type === 'login' ? 'LOGIN' : 'SIGN UP'}</FormTitle>
        <StyledInput
          id='login'
          type='text'
          placeholder='Username'
          {...register('username', { required: true, minLength: 4 })}
        />
        {errors.username && (
          <StyledErrorMessage>Username must have at least 4 characters!</StyledErrorMessage>
        )}
        <StyledInput
          id='password'
          type='password'
          placeholder='Password'
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && (
          <StyledErrorMessage>Password must have at least 6 characters!</StyledErrorMessage>
        )}
        <OptionalStyledDiv>
          <StyledRememberOptionContainer>
            <StyledCheckbox type='checkbox' name='remember' id='remember-user' />
            <StyledLabel htmlFor='remember-user'>Remember me</StyledLabel>
          </StyledRememberOptionContainer>
          {type === 'login' && <BasicLinkStyle href='#'>Forgot password?</BasicLinkStyle>}
        </OptionalStyledDiv>
        <StyledButton type='submit'>Login</StyledButton>
        <BasicLinkStyle href='#'>
          {type === 'login' ? 'No account?' : 'Have an account?'}
        </BasicLinkStyle>
      </Flex>
    </StyledForm>
  );
};
