import { COLOR_YELLOW, COLOR_GRAY_300 } from './../constants/colors';
import styled from 'styled-components';
import { Button, Flex } from '../../typography';
import { COLOR_WHITE, COLOR_GREEN_100, COLOR_GREEN_300 } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Link, NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

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
  font-size: 1.5rem;
  padding: 1.5rem;
  margin-right: 1rem;
`;

export const StyledSearchButton = styled(Button)`
  height: 100%;
  font-size: 1.5rem;
  padding: 1.5rem;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAccountButton = styled(Button)`
  font-size: 1.5rem;
  padding: 1.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Dropdown = {
  visible: boolean;
};

type Image = {
  bgImage: string;
};

type Star = {
  enabled: boolean;
};

export const StyledSearchDropdown = styled(Flex)<Dropdown>`
  width: 200%;
  height: 80vh;
  top: 280%;
  position: absolute;
  box-shadow: ${SHADOW_SMALL};
  background-color: ${COLOR_WHITE};
  display: ${props => (props.visible ? 'block' : 'none')};
  overflow-y: auto;
  padding-left: 8rem;
`;

export const StyledDropdownItem = styled(Flex)`
  width: 100%;
  min-height: 12rem;
  font-size: 1.4rem;
  padding: 2rem;
  flex-shrink: 0;
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

export const StyledItemLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${COLOR_GRAY_300};
`;

export const StyledStar = styled(FaStar)<Star>`
  height: 20px;
  width: 20px;
  margin: 0 0.2rem;
  color: ${props => (props.enabled ? COLOR_YELLOW : COLOR_GRAY_300)};
`;

export const StyledStarContainer = styled(Flex)`
  margin-left: 1rem;
`;
