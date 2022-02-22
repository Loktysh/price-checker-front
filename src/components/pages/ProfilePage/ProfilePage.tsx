import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import AppHeader from '../../common/AppHeader';
import ProfileList from '../../common/ProfileList';
import { NotLoggedButton, NotLoggedWrapper, StyledNotLogged } from './styled';

import { Link, useParams } from 'react-router-dom';
import { AppFooter } from '../../common/AppFooter';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfilePage = () => {
  const user = useParams();
  const isLogged = useSelector((state: RootState) => state.login.logged);

  const content = isLogged ? (
    <ProfileList user={user} />
  ) : (
    <NotLoggedWrapper direction='column'>
      <StyledNotLogged>Please login to view profile.</StyledNotLogged>
      <Link to='/login'>
        <NotLoggedButton data-testid='profile-login'>Log in</NotLoggedButton>
      </Link>
    </NotLoggedWrapper>
  );

  return (
    <Container>
      <AppHeader />
      {content}
      <AppFooter />
    </Container>
  );
};

export default ProfilePage;
