import React, { useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Flex } from '../../typography';
import {
  BasicReactRouterLink,
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
  onAuthSubmit: (params: any) => void;
}

interface IFormInput {
  username: string;
  password: string;
}

export const AuthForm = ({ type, onAuthSubmit }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<IFormInput> = data => {
    onAuthSubmit(data);
  };
  const onErrors = (errors: any) => console.log(errors);

  const navLink = useMemo(
    () =>
      type === 'login'
        ? {
            label: 'No account?',
            path: '/signup',
          }
        : { label: 'Have an account?', path: '/login' },
    [type],
  );

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, onErrors)}>
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
          {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          })}
        />
        {errors.password && (
          <StyledErrorMessage>
            Password must have minimum 8 characters, at least one letter and one number!
          </StyledErrorMessage>
        )}
        <OptionalStyledDiv>
          <StyledRememberOptionContainer>
            <StyledCheckbox type='checkbox' name='remember' id='remember-user' />
            <StyledLabel htmlFor='remember-user'>Remember me</StyledLabel>
          </StyledRememberOptionContainer>
          {type === 'login' && <BasicReactRouterLink to='#'>Forgot password?</BasicReactRouterLink>}
        </OptionalStyledDiv>
        <StyledButton type='submit'>Login</StyledButton>
        <BasicReactRouterLink to={navLink.path}>{navLink.label}</BasicReactRouterLink>
      </Flex>
    </StyledForm>
  );
};
