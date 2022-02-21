import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { unlogUser } from '../../../store/actions';
import { removeStorageTokens } from '../../../utils';
import { StyledLoginDropdown, StyledMenuItem, StyledMenuLink } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const LoginDropdown: FC = () => {
  const { userLogin } = useSelector((state: RootState) => state.login);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    removeStorageTokens();
    unlogUser();
  };
  return (
    <StyledLoginDropdown data-testid='login-dropdown' direction='column'>
      <StyledMenuLink to={'/profile/' + userLogin}>Profile</StyledMenuLink>
      <StyledMenuLink to='/settings'>Settings</StyledMenuLink>
      <StyledMenuItem onClick={logout}>Log out</StyledMenuItem>
    </StyledLoginDropdown>
  );
};

export default LoginDropdown;
