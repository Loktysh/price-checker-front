import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../store/slices';
import { StyledLoginDropdown } from './styled';

const LoginDropdown: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    localStorage.removeItem('token');
    localStorage.removeItem('renewToken');
    dispatch(logoutUser());
  };
  return (
    <StyledLoginDropdown direction='column'>
      <p>Profile</p>
      <p onClick={logout}>Logout</p>
    </StyledLoginDropdown>
  );
};

export default LoginDropdown;
