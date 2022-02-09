import styled from 'styled-components';
import { Flex } from '../../typography';
import { COLOR_WHITE } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';

export const StyledInfoContainer = styled(Flex)`
  width: 75%;
  height: 80vh;
  margin: 5rem auto 0;
  gap: 3rem;
`;

export const StyledInfoCard = styled.main`
  height: 400px;
  width: 70%;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
`;

export const StyledChartCard = styled.div`
  height: 400px;
  width: 70%;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
`;
