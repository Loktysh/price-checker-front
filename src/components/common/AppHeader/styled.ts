import styled from 'styled-components';
import { Button, Flex } from '../../typography';
import { COLOR_WHITE, COLOR_GREEN_100, COLOR_GREEN_300 } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { NavLink } from 'react-router-dom';

// TODO: implement better styling

export const StyledHeader = styled(Flex)`
  background-color: ${COLOR_WHITE};
  min-height: 85px;
  width: 100%;
  box-shadow: ${SHADOW_SMALL};
`;

export const StyledHeaderName = styled(NavLink)`
  color: ${COLOR_GREEN_100};
  text-decoration: none;
  transition: 0.1s ease;
  &:hover {
    color: ${COLOR_GREEN_300};
    transition: 0.1s ease;
  }
`;

export const StyledSearchField = styled(Flex)`
  height: 3rem;
`;

export const StyledSearchInput = styled.input`
  height: 100%;
`;

export const StyledSearchButton = styled(Button)`
  height: 100%;
`;

export const StyledSearchDropdown = styled(Flex)``;
