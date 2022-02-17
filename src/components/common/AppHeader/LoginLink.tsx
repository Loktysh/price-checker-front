import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type LoginLinkProps = {
  isLinkEnabled: boolean;
  children: JSX.Element;
};

const LoginLink: FC<LoginLinkProps> = ({ isLinkEnabled, children }) => {
  if (!isLinkEnabled) {
    return <Link to={'/login'}>{children}</Link>;
  } else {
    return children;
  }
};

export default LoginLink;
