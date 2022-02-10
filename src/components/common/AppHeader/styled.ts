import { COLOR_GRAY_300, COLOR_GRAY_100 } from './../constants/colors';
import styled from 'styled-components';
import { Button, Flex } from '../../typography';
import { COLOR_WHITE, COLOR_GREEN_100, COLOR_GREEN_300, COLOR_BLACK } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { NavLink } from 'react-router-dom';

type Dropdown = {
  visible: boolean;
};

type Image = {
  bgImage: string;
};

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
  z-index: 2;
`;

export const StyledSearchInput = styled.input`
  height: 100%;
  width: 400px;
  font-size: 1.5rem;
  padding: 1.5rem;
  margin-right: 1rem;
`;

export const StyledSearchButton = styled(Button)`
  height: 3rem;
  font-size: 1.5rem;
  padding: 1.5rem;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${COLOR_GREEN_300};
  }
`;

export const StyledAccountButton = styled(Button)`
  text-decoration: none;
  color: ${COLOR_GRAY_300};
  font-size: 1.5rem;
  padding: 1.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: solid 2px ${COLOR_BLACK};
`;

export const StyledSearchDropdown = styled(Flex)<Dropdown>`
  width: 200%;
  height: 80vh;
  top: 280%;
  position: absolute;
  box-shadow: ${SHADOW_SMALL};
  background-color: ${COLOR_WHITE};
  display: ${props => (props.visible ? 'block' : 'none')};
  overflow-y: auto;
`;

export const StyledDropdownItem = styled(Flex)`
  width: 100%;
  min-height: 12rem;
  font-size: 1.6rem;
  padding: 2rem;
  flex-shrink: 0;
  &:hover {
    background-color: ${COLOR_GRAY_100};
  }
`;

export const StyledDropdownImage = styled.div<Image>`
  height: 11rem;
  width: 11rem;
  margin-right: 3rem;
  background-image: url(${props => props.bgImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const StyledRating = styled.p`
  margin-right: 2rem;
  font-weight: bold;
`;

export const StyledLoginDropdown = styled(Flex)`
  height: auto;
  width: 100%;
  top: 150%;
  background-color: ${COLOR_WHITE};
  position: absolute;
  box-shadow: ${SHADOW_SMALL};
`;
