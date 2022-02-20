import React, { useState } from 'react';
import {
  SettingsContainer,
  PageTitle,
  SettingTitle,
  SettingText,
  NotificationLink,
  CurrentSettingContainer,
} from './styled';

export const SettingsPage = () => {
  const [enabledNotifications, setNotificationEnabled] = useState(false);
  return (
    <SettingsContainer>
      <PageTitle>My settings</PageTitle>
      <SettingTitle>Notifications in Telegram</SettingTitle>
      <CurrentSettingContainer>
        {!enabledNotifications && (
          <SettingText>For notifications follow the link below:</SettingText>
        )}
        {!enabledNotifications && (
          <NotificationLink
            to={'#'}
            onClick={() => {
              setNotificationEnabled(true);
            }}
          >
            Receive notifications
          </NotificationLink>
        )}
        {enabledNotifications && <SettingText>Notification enabled</SettingText>}
      </CurrentSettingContainer>
    </SettingsContainer>
  );
};
