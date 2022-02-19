import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import AppHeader from '../common/AppHeader';

const ProfilePage = () => {
  const isLogged = useSelector((state: RootState) => state.login.logged);

  const content = isLogged ? (
    <div>Profile page!</div>
  ) : (
    <div>Please log in to view your profile.</div>
  );

  return (
    <>
      <AppHeader />
      {content}
    </>
  );
};

export default ProfilePage;
