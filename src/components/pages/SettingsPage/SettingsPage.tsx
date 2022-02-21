import React, { useMemo } from 'react';
import {
  SettingsContainer,
  PageTitle,
  SettingTitle,
  SettingText,
  NotificationLink,
  CurrentSettingContainer,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleSubscribe } from '../../../store/slices/loginSlice';
import { NotLoggedButton, NotLoggedWrapper, StyledNotLogged } from '../ProfilePage/styled';
import { Link } from 'react-router-dom';

export const SettingsPage = () => {
  const { isSubscribed, userLogin } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const telegramLink = useMemo(() => {
    return `https://t.me/rspricecheckerbot?${isSubscribed ? 'stop' : 'start'}=${userLogin}`;
  }, [isSubscribed, userLogin]);

  const { logged } = useSelector((state: RootState) => state.login);

  return (
    <>
      {logged ? (
        <SettingsContainer>
          <PageTitle>My settings</PageTitle>
          <SettingTitle>Notifications in Telegram</SettingTitle>
          <CurrentSettingContainer>
            <SettingText>
              {!isSubscribed
                ? 'For notifications click the link below:'
                : 'Notifications enabled. To unsubscribe, click the button below:'}
            </SettingText>
            <NotificationLink
              href={telegramLink}
              target='_blank'
              onClick={() => {
                dispatch(toggleSubscribe(!isSubscribed));
              }}
            >
              {isSubscribed ? 'Do not receive notifications' : 'Receive notifications'}
            </NotificationLink>
          </CurrentSettingContainer>
        </SettingsContainer>
      ) : (
        <NotLoggedWrapper direction='column'>
          <StyledNotLogged>Please login to view profile.</StyledNotLogged>
          <Link to='/login'>
            <NotLoggedButton>Log in</NotLoggedButton>
          </Link>
        </NotLoggedWrapper>
      )}
    </>
  );
};
