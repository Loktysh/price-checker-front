import { COLOR_GRAY_100 } from './../constants/colors';
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
  position: relative;
`;

export const StyledSearchInput = styled.input`
  height: 100%;
  width: 400px;
`;

export const StyledSearchButton = styled(Button)`
  height: 100%;
`;

type Dropdown = {
  visible: boolean;
};

export const StyledSearchDropdown = styled(Flex)<Dropdown>`
  width: 100%;
  height: auto;
  left: 0px;
  top: 100%;
  position: absolute;
  border: 1px solid ${COLOR_GREEN_300};
  background-color: ${COLOR_WHITE};
  display: ${props => (props.visible ? 'block' : 'none')};
`;

type DropdownItem = {
  odd?: boolean;
};

export const StyledDropdownItem = styled(Flex)<DropdownItem>`
  width: 100%;
  height: 5rem;
  padding: 5px;
  background-color: ${props => (props.odd ? COLOR_GRAY_100 : COLOR_WHITE)};
  font-size: 1.4rem;
`;

export const StyledDropdownImage = styled.img`
  height: 100%;
  margin-left: auto;
  background-image: ${props => props.src};
`;
