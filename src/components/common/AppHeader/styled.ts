import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GREEN_100 } from '../constants/colors';
import { Flex } from '../constants/layouts';
import { SHADOW_SMALL } from '../constants/shadows';

export const StyledHeader = styled(Flex)`
  background-color: ${COLOR_WHITE};
  min-height: 85px;
  width: 100%;
  box-shadow: ${SHADOW_SMALL};
`;
