import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  COLOR_GRAY_300,
  COLOR_GREEN_100,
  COLOR_GREEN_300,
  COLOR_WHITE,
} from '../../common/constants/colors';

export const SettingsContainer = styled.div`
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;

export const PageTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${COLOR_GRAY_300};
`;

export const SettingTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${COLOR_GRAY_300};
  margin: 0;
`;

export const CurrentSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SettingText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${COLOR_GRAY_300};
  margin: 0;
`;

export const NotificationLink = styled(Link)`
  text-decoration: none;
  font-size: 1.8rem;
  color: ${COLOR_WHITE};
  width: 20rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR_GREEN_100};
  border: 1px solid transparent;
  border-radius: 2px;

  :hover {
    background-color: ${COLOR_GREEN_300};
    cursor: pointer;
    border-color: ${COLOR_GRAY_300};
  }
`;
