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

export const SettingsPage = () => {
  const { isSubscribed, userLogin } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const telegramLink = useMemo(() => {
    return `https://t.me/rspricecheckerbot?${isSubscribed ? 'stop' : 'start'}=${userLogin}`;
  }, [isSubscribed, userLogin]);

  return (
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
  );
};
