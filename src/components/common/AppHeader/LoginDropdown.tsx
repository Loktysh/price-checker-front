import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { unlogUser } from '../../../store/actions';
import { removeStorageTokens } from '../../../utils';
import { StyledLoginDropdown, StyledMenuItem } from './styled';

const LoginDropdown: FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    removeStorageTokens();
    unlogUser();
  };
  return (
    <StyledLoginDropdown direction='column'>
      <StyledMenuItem>Profile</StyledMenuItem>
      <StyledMenuItem onClick={logout}>Logout</StyledMenuItem>
    </StyledLoginDropdown>
  );
};

export default LoginDropdown;
