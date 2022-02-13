import React, { FC, useMemo, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Flex } from '../../typography';
import { AuthFormParams } from '../types';
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
import { useNavigate } from 'react-router-dom';
import { loginUser, setUserLogin, setUserRenewToken, setUserToken } from '../../../store/slices';

type AuthVariant = 'login' | 'signup';

type AuthFormProps = {
  type: AuthVariant;
  onAuthSubmit: (params: AuthFormParams, type: AuthVariant) => Promise<void>;
};

export const AuthForm: FC<AuthFormProps> = ({ type, onAuthSubmit }) => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormParams>({
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<AuthFormParams> = data => {
    onAuthSubmit(data, type)
      .then(() => {
        setError(false);
      })
      .then(() => {
        const token = JSON.parse(localStorage.getItem('token') as string);
        const renewToken = JSON.parse(localStorage.getItem('renewToken') as string);
        dispatch(loginUser());
        dispatch(setUserLogin(data.login));
        if (token && renewToken) {
          dispatch(setUserToken(token));
          dispatch(setUserRenewToken(renewToken));
        } else {
          setError(true);
          throw new Error('Login error');
        }
      })
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        setError(true);
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

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} method='POST'>
      <Flex direction='column' gap='3rem'>
        <FormTitle>{type === 'login' ? 'LOGIN' : 'SIGN UP'}</FormTitle>
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
            <StyledCheckbox type='checkbox' name='remember' id='remember-user' />
            <StyledLabel htmlFor='remember-user'>Remember me</StyledLabel>
          </StyledRememberOptionContainer>
          {type === 'login' && <BasicReactRouterLink to='#'>Forgot password?</BasicReactRouterLink>}
        </OptionalStyledDiv>
        <StyledButton type='submit'>Login</StyledButton>
        {error && <p>Error logging in... Please retry</p>}
        <BasicReactRouterLink to={navLink.path}>{navLink.label}</BasicReactRouterLink>
      </Flex>
    </StyledForm>
  );
};
