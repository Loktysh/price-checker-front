import { COLOR_GRAY_300, COLOR_GRAY_100 } from './../constants/colors';
import styled from 'styled-components';
import { Button, Flex } from '../../typography';
import { COLOR_WHITE, COLOR_GREEN_100, COLOR_GREEN_300 } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Image } from '../types';
import { Link, NavLink } from 'react-router-dom';

type Dropdown = {
  visible: boolean;
};

export const StyledHeader = styled(Flex)`
  background-color: ${COLOR_WHITE};
  min-height: 85px;
  width: 100%;
  box-shadow: ${SHADOW_SMALL};
  padding: 0 10rem;
`;

export const StyledHeaderName = styled(NavLink)`
  color: ${COLOR_GREEN_100};
  text-decoration: none;
  transition: 0.1s ease;
  &:hover {
    color: ${COLOR_GREEN_300};
    transition: 0.1s ease;
  }

  @media (max-width: 600px) {
    display: none;
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

  @media (max-width: 768px) {
    width: 30rem;
  }

  @media (max-width: 500px) {
    width: 75%;
  }
`;

export const StyledSearchButton = styled(Button)`
  height: 3rem;
  font-size: 1.5rem;
  padding: 1.5rem;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLOR_GREEN_100};
  border-radius: 2px;
  &:hover {
    background-color: ${COLOR_GREEN_300};
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    font-size: 1.4rem;
  }

  @media (max-width: 450px) {
    padding: 1.5rem 0.6rem;
    font-size: 1.2rem;
  }
`;

export const StyledHistoryButton = styled(Button)`
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
  margin-right: 20px;
`;

export const StyledAccountButton = styled(Button)`
  position: relative;
  text-decoration: none;
  color: ${COLOR_GRAY_300};
  font-size: 1.5rem;
  padding: 1.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${COLOR_GREEN_100};
  border-radius: 2px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    font-size: 1.4rem;
  }

  @media (max-width: 450px) {
    padding: 1.5rem 0.8rem;
    font-size: 1.2rem;
  }
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

  @media (max-width: 1060px) {
    width: 150%;
  }

  @media (max-width: 850px) {
    width: 115%;
    left: 2px;
  }

  @media (max-width: 450px) {
    width: 118%;
    left: 2px;
  }
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

export const StyledItemName = styled.p`
  font-size: 1.6rem;

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;

export const StyledItemPrice = styled.p`
  font-size: 1.6rem;

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;

export const StyledDropdownImage = styled.div<Image>`
  height: 11rem;
  width: 11rem;
  margin-right: 3rem;
  background-image: url(${props => (props ? props.bgImage : null)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 650px) {
    height: 9rem;
    width: 9rem;
    margin-right: 0.5rem;
  }
`;

export const StyledRating = styled.p`
  margin-right: 2rem;
  font-weight: bold;
  font-size: 1.6rem;

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;

export const BasicLink = styled(Link)`
  text-decoration: none;
`;

export const StyledLoginDropdown = styled(Flex)`
  height: auto;
  width: 100%;
  top: 150%;
  background-color: ${COLOR_WHITE};
  position: absolute;
  box-shadow: ${SHADOW_SMALL};
`;

export const StyledMenuItem = styled(Flex)`
  width: 100%;
  height: 5rem;
  &:hover {
    background-color: ${COLOR_GRAY_100};
  }
`;
