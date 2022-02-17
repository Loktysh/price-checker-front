import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { COLOR_GRAY_100, COLOR_GRAY_300, COLOR_GREEN_100, COLOR_WHITE } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';

type StyledProps = {
  open: boolean;
};

export const StyledHistoryPanel = styled.aside<StyledProps>`
  padding: 3rem;
  width: 25%;
  height: 100%;
  box-shadow: ${SHADOW_SMALL};
  background-color: ${COLOR_WHITE};
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 20;
  transform: ${props => (props.open ? 'translateX(0px)' : 'translateX(100%)')};
  transition: all 0.5s ease;
`;

export const StyledHistoryHeading = styled.h3`
  font-size: 2.3rem;
  color: ${COLOR_GRAY_300};
`;

export const StyledHistoryItem = styled.div`
  height: 5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${COLOR_GRAY_100};
  }
`;

export const StyledCloseButton = styled(FaTimes)`
  height: 30px;
  width: 30px;
  color: ${COLOR_GREEN_100};
`;
