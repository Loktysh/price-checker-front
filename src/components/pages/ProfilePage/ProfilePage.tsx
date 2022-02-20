import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import AppHeader from '../../common/AppHeader';
import ProfileList from '../../common/ProfileList';
import { NotLoggedButton, NotLoggedWrapper, StyledNotLogged } from './styled';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const isLogged = useSelector((state: RootState) => state.login.logged);

  const content = isLogged ? (
    <ProfileList />
  ) : (
    <NotLoggedWrapper direction='column'>
      <StyledNotLogged>Please log in to view profile.</StyledNotLogged>
      <Link to='/login'>
        <NotLoggedButton data-testid='profile-login'>Log in</NotLoggedButton>
      </Link>
    </NotLoggedWrapper>
  );

  return (
    <>
      <AppHeader />
      {content}
    </>
  );
};

export default ProfilePage;
