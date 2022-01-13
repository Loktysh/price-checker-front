import { StyledHeader } from './styled';
import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <h1>PRICE CHECKER</h1>
      </Link>
    </StyledHeader>
  );
};

export default AppHeader;
