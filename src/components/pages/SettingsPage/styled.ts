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
  flex-grow: 1;
`;

export const PageTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${COLOR_GRAY_300};

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const SettingTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${COLOR_GRAY_300};
  margin: 0;

  @media (max-width: 650px) {
    font-size: 1.6rem;
  }
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

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;

export const NotificationLink = styled.a`
  text-decoration: none;
  font-size: 1.8rem;
  color: ${COLOR_WHITE};
  width: 20rem;
  height: 4.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR_GREEN_300};
  border-radius: 2px;
  transition: 0.3s;

  :hover {
    background-color: ${COLOR_GREEN_100};
    cursor: pointer;
  }

  @media (max-width: 650px) {
    font-size: 1.4rem;
    width: 15rem;
    height: 4rem;
  }
`;
