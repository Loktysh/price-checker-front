import styled from 'styled-components';
import { COLOR_WHITE } from '../constants/colors';
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
