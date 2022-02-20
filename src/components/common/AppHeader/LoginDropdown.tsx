import React, { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { unlogUser } from '../../../store/actions';
import { removeStorageTokens } from '../../../utils';
import { StyledLoginDropdown, StyledMenuItem, StyledMenuLink } from './styled';

const LoginDropdown: FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    removeStorageTokens();
    unlogUser();
  };
  return (
    <StyledLoginDropdown direction='column'>
      <StyledMenuLink to='/profile'>Profile</StyledMenuLink>
      <StyledMenuLink to='/settings'>Settings</StyledMenuLink>
      <StyledMenuItem onClick={logout}>Logout</StyledMenuItem>
    </StyledLoginDropdown>
  );
};

export default LoginDropdown;
