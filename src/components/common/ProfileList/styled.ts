import styled from 'styled-components';
import {
  COLOR_GRAY_100,
  COLOR_GRAY_300,
  COLOR_GREEN_100,
  COLOR_GREEN_300,
  COLOR_WHITE,
} from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Button, Flex } from '../../typography';
import { Image } from '../types';

export const StyledProfileHeading = styled(Flex)`
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
  margin: 4rem auto 0;
  padding: 2rem;
  height: 80px;
  width: 55%;

  @media (max-width: 1000px) {
    width: 80%;
    margin: 3rem auto 0;
  }

  @media (max-width: 700px) {
    width: 90%;
    margin: 2rem auto 0;
  }
`;

export const StyledProfileWrapper = styled(Flex)`
  width: 55%;
  margin: 3rem auto;
  height: auto;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};

  @media (max-width: 1000px) {
    width: 80%;
    margin: 2rem auto;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const StyledProfileItem = styled.div`
  height: auto;
  width: 100%;
  background-color: ${COLOR_WHITE};
  padding: 2rem;
  border-bottom: 1px solid ${COLOR_GRAY_100};

  @media (max-width: 700px) {
    padding: 1rem;
  }
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
  margin: 0;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const ProductLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;

  @media (max-width: 800px) {
    padding: 1.5rem 0 0;
  }
`;

export const ProfileParagraph = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  color: ${COLOR_GRAY_300};
  word-break: break-word;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const ProfileButton = styled(Button)`
  height: 45px;
  width: 90px;
  font-size: 1.4rem;
  border-radius: 2px;
  background-color: ${COLOR_GREEN_300};
  transition: 0.3s;

  @media (max-width: 800px) {
    font-size: 1.2rem;
    height: 40px;
    width: 80px;
  }

  :hover {
    background-color: ${COLOR_GREEN_100};
  }
`;

export const StyledProfilePrice = styled.p`
  margin: 0;
  font-size: 1.6rem;
  color: ${COLOR_GREEN_300};
  font-weight: 600;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const StyledMoreButton = styled(Button)`
  width: 150px;
  height: 45px;
  margin: 2rem 0;
  font-size: 1.4rem;
  border-radius: 2px;
  background-color: ${COLOR_GREEN_300};
  transition: 0.3s;

  @media (max-width: 800px) {
    font-size: 1.2rem;
    height: 40px;
    width: 120px;
    margin: 1rem 0;
  }

  :hover {
    background-color: ${COLOR_GREEN_100};
  }
`;
