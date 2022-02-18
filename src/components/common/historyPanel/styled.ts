import styled from 'styled-components';
import { SHADOW_SMALL } from '../constants/shadows';

export const StyledHistoryPanel = styled.aside`
  position: relative;
  padding: 3rem;
  width: 24%;
  height: 80vh;
  right: 2rem;
  top: 0;
  box-shadow: ${SHADOW_SMALL};

  @media (max-width: 1000px) {
    width: 18%;
    right: 0;
  }

  @media (max-width: 600px) {
    width: 25%;
  }
`;
