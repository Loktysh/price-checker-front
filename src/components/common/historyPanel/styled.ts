import styled from 'styled-components';
import { SHADOW_SMALL } from '../constants/shadows';

export const StyledHistoryPanel = styled.aside`
  position: absolute;
  padding: 3rem;
  width: 24%;
  height: 80vh;
  right: 20px;
  top: 0;
  box-shadow: ${SHADOW_SMALL};
`;
