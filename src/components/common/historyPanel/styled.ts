import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import {
  COLOR_GRAY_100,
  COLOR_GRAY_200,
  COLOR_GRAY_300,
  COLOR_GREEN_100,
  COLOR_GREEN_300,
  COLOR_WHITE,
} from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';

type StyledProps = {
  open: boolean;
};

export const StyledHistoryPanel = styled.aside<StyledProps>`
  padding: 1rem 2rem;
  width: 20%;
  height: 100%;
  box-shadow: ${SHADOW_SMALL};
  background-color: ${COLOR_WHITE};
  position: absolute;
  top: 0px;
  left: -100%;
  z-index: 20;
  left: ${props => (props.open ? '0' : '-100%')};
  transition: all 0.5s ease;

  @media (max-width: 1000px) {
    width: 30%;
  }

  @media (max-width: 750px) {
    width: 35%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const StyledHistoryHeading = styled.h3`
  font-size: 2.2rem;
  color: ${COLOR_GRAY_300};
  margin: 1rem 0;

  @media (max-width: 850px) {
    font-size: 2rem;
  }
`;

export const StyledHistoryItem = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  transition: 0.3s;
  padding: 1rem;

  &:hover {
    background-color: ${COLOR_GRAY_100};
  }
`;

export const StyledHistorySpan = styled.span`
  font-size: 1.8rem;
  color: ${COLOR_GRAY_300};
  transition: 0.3s;

  :hover {
    color: ${COLOR_GRAY_200};
  }

  @media (max-width: 850px) {
    font-size: 1.6rem;
  }
`;

export const StyledCloseButton = styled(FaTimes)`
  height: 25px;
  width: 25px;
  color: ${COLOR_GREEN_100};
  transition: 0.3s;

  :hover {
    color: ${COLOR_GREEN_300};
  }

  @media (max-width: 850px) {
    height: 20px;
    width: 20px;
  }
`;
