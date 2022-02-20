import React, { useEffect, useMemo, useState } from 'react';
import {
  SettingsContainer,
  PageTitle,
  SettingTitle,
  SettingText,
  NotificationLink,
  CurrentSettingContainer,
} from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export const SettingsPage = () => {
  const { isSubscribed, userLogin } = useSelector((state: RootState) => state.login);
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    setSubscribe(isSubscribed);
  }, [isSubscribed]);

  const telegramLink = useMemo(() => {
    return `https://t.me/rspricecheckerbot?${isSubscribed ? 'stop' : 'start'}=${userLogin}`;
  }, [isSubscribed, userLogin]);

  return (
    <SettingsContainer>
      <PageTitle>My settings</PageTitle>
      <SettingTitle>Notifications in Telegram</SettingTitle>
      <CurrentSettingContainer>
        <SettingText>
          {!subscribe
            ? 'For notifications click the link below:'
            : 'Notifications enabled. To unsubscribe, click the button below:'}
        </SettingText>
        <NotificationLink
          href={telegramLink}
          target='_blank'
          onClick={() => {
            setSubscribe(true);
          }}
        >
          {subscribe ? 'Do not receive notifications' : 'Receive notifications'}
        </NotificationLink>
      </CurrentSettingContainer>
    </SettingsContainer>
  );
};
