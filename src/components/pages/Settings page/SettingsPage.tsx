import React from 'react';
import { SettingContainer, PageTitle, SettingTitle, SettingText, NotificationLink } from './styled';

export const SettingsPage = () => {
  return (
    <SettingContainer>
      <PageTitle>My settings</PageTitle>
      <SettingTitle>Notifications in Telegram</SettingTitle>
      <SettingText>For notifications follow the link below:</SettingText>
      <NotificationLink to={'/'}>Receive notifications</NotificationLink>
    </SettingContainer>
  );
};
