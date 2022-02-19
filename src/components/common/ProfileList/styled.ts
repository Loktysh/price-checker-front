import styled from 'styled-components';
import { COLOR_GRAY_100, COLOR_GRAY_300, COLOR_GREEN_100, COLOR_WHITE } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Button, Flex } from '../../typography';
import { Image } from '../types';

export const StyledProfileHeading = styled(Flex)`
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
  margin: 5rem auto 0;
  padding: 2rem;
  height: 100px;
  width: 55%;
`;

export const StyledProfileWrapper = styled(Flex)`
  width: 55%;
  margin: 3rem auto;
  height: auto;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
`;

export const StyledProfileItem = styled.div`
  height: auto;
  width: 100%;
  background-color: ${COLOR_WHITE};
  padding: 2rem;
  border-bottom: 1px solid ${COLOR_GRAY_100};
`;

export const StyledProfileImage = styled.div<Image>`
  background-image: url(${props => (props ? props.bgImage : null)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100px;
  width: 100px;
  background-color: ${COLOR_WHITE};
`;

export const StyledProfileH = styled.h2`
  font-size: 2.3rem;
  color: ${COLOR_GRAY_300};
`;

export const ProfileParagraph = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  color: ${COLOR_GRAY_300};
`;

export const ProfileButton = styled(Button)`
  margin: 2rem 2rem 0 0;
  height: 40px;
  width: 80px;
  font-size: 1.1rem;
`;

export const StyledProfilePrice = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: ${COLOR_GREEN_100};
  font-weight: 600;
`;

export const StyledMoreButton = styled(Button)`
  width: 100px;
  height: 50px;
  margin: 2rem 0;
  font-size: 1.1rem;
`;
