import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type LoginLinkProps = {
  isLinkEnabled: boolean;
  children: JSX.Element;
};

const BasicLink = styled(Link)`
  text-decoration: none;
`;

const LoginLink: FC<LoginLinkProps> = ({ isLinkEnabled, children }) => {
  if (!isLinkEnabled) {
    return <BasicLink to={'/login'}>{children}</BasicLink>;
  } else {
    return children;
  }
};

export default LoginLink;
