import React, { FC, useCallback, useMemo, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Flex } from '../../typography';
import { AuthFormParams } from '../types';
import {
  AuthError,
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
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
interface AuthFormProps {
  type: 'login' | 'signup';
  onAuthSubmit: (params: AuthFormParams, type: string) => void;
  authError: string;
}

export const AuthForm: FC<AuthFormProps> = ({ type, onAuthSubmit, authError }) => {
=======
type AuthVariant = 'login' | 'signup';

type AuthFormProps = {
  type: AuthVariant;
  onAuthSubmit: (params: AuthFormParams, type: AuthVariant, remember: boolean) => Promise<void>;
};

export const AuthForm: FC<AuthFormProps> = ({ type, onAuthSubmit }) => {
  const [error, setError] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);
  const navigate = useNavigate();

>>>>>>> dev
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormParams>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<AuthFormParams> = data => {
    onAuthSubmit(data, type, remember)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        setError(`Error logging in, please retry. ERROR: ${error}`);
      });
  };

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

  const handleRememberCheckbox = useCallback(() => {
    setRemember(!remember);
  }, [remember]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} method='POST'>
      <Flex direction='column' gap='3rem'>
        <FormTitle>{type === 'login' ? 'LOGIN' : 'SIGN UP'}</FormTitle>
        <AuthError>{authError}</AuthError>
        <StyledInput
          id='login'
          type='text'
          placeholder='Username'
          {...register('login', { required: true, minLength: 4 })}
        />
        {errors.login && (
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
            <StyledCheckbox
              type='checkbox'
              name='remember'
              id='remember-user'
              checked={remember}
              onChange={handleRememberCheckbox}
            />
            <StyledLabel htmlFor='remember-user'>Remember me</StyledLabel>
          </StyledRememberOptionContainer>
          {type === 'login' && <BasicReactRouterLink to='#'>Forgot password?</BasicReactRouterLink>}
        </OptionalStyledDiv>
        <StyledButton type='submit'>Login</StyledButton>
        {error.length > 0 && <p>{error}</p>}
        <BasicReactRouterLink to={navLink.path}>{navLink.label}</BasicReactRouterLink>
      </Flex>
    </StyledForm>
  );
};
