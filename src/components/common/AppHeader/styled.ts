import styled from 'styled-components';
import { Flex } from '../../typography';
import { COLOR_WHITE } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';

export const StyledHeader = styled(Flex)`
  background-color: ${COLOR_WHITE};
  min-height: 85px;
  width: 100%;
  box-shadow: ${SHADOW_SMALL};
`;
