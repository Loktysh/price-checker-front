import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { COLOR_GRAY_300, COLOR_GREEN_100, COLOR_YELLOW } from '../common/constants/colors';
import { SHADOW_SMALL } from '../common/constants/shadows';

type FlexStyling = {
  justify?: string;
  alignItems?: string;
  alignContent?: string;
  direction?: string;
  wrap?: string;
  gap?: string;
};

type GridStyling = {
  repeat?: boolean;
  columns?: string;
  rows?: string;
  gap?: string;
  justifyItems?: string;
  alignItems?: string;
  justifyContent?: string;
  alignContent?: string;
};

type FlexElementStyling = {
  order: number;
  grow: number;
  shrink: number;
  align: number;
};

type GridElementStyling = {
  row?: string;
  column?: string;
  justifySelf?: string;
  alignSelf?: string;
};

type ButtonStyling = {
  outline?: boolean;
  color?: string;
  textColor?: string;
};

type Star = {
  enabled: string;
};

type SpinnerProps = {
  size?: string;
  color?: string;
};

export const Flex = styled.div<FlexStyling>`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.direction || 'row'};
  align-content: ${props => props.alignContent || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
`;

export const FlexElement = styled.div<FlexElementStyling>`
  order: ${props => props.order || '0'};
  flex-grow: ${props => props.grow || '0'};
  flex-shrink: ${props => props.shrink || '1'};
  align-self: ${props => props.align || 'auto'};
`;

export const Grid = styled.div<GridStyling>`
  display: grid;
  grid-template-columns: ${props =>
    props.repeat ? `repeat(${props.columns}, 1fr)` : props.columns || 'none'};
  grid-template-rows: ${props => props.rows || 'none'};
  gap: ${props => props.gap || '0'};
  justify-items: ${props => props.justifyItems || 'start'};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-content: ${props => props.alignContent || 'stretch'};
`;

export const GridElement = styled.div<GridElementStyling>`
  grid-row: ${props => props.row || 'auto auto'};
  grid-column: ${props => props.column || 'auto auto'};
`;

export const Button = styled.button<ButtonStyling>`
  background-color: ${props =>
    props.outline ? 'transparent' : props.color ? props.color : 'black'};
  border-color: ${props => (props.outline ? (props.color ? props.color : 'black') : 'transparent')};
  color: ${props => (props.textColor ? props.textColor : props.outline ? 'black' : 'white')};
  cursor: pointer;
`;

export const StyledStar = styled(FaStar)<Star>`
  height: 20px;
  width: 20px;
  margin: 0 0.2rem;
  color: ${props => (props.enabled === 'true' ? COLOR_YELLOW : COLOR_GRAY_300)};

  @media (max-width: 768px) {
    height: 15px;
    width: 15px;
  }
`;

export const StyledScrollBar = styled.div`
  *::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb {
    background: ${COLOR_GREEN_100};
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledItemHeaderLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: ${COLOR_GRAY_300};
  text-decoration: none;
  transition: 0.3s;
`;

export const StyledItemLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 0.5rem;
  color: ${COLOR_GRAY_300};
  transition: 0.3s;

  :hover {
    box-shadow: ${SHADOW_SMALL};
  }
`;

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<SpinnerProps>`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: ${props => '80px' && props.size};
  height: ${props => '80px' && props.size};
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    display: block;
    width: ${props => '50px' && props.size};
    height: ${props => '50px' && props.size};
    margin: 8px;
    border-radius: 50%;
    border: 3px solid ${props => 'white' && props.color};
    border-color: ${props => 'white' && props.color} transparent ${props => 'white' && props.color}
      transparent;
    animation: ${spinnerAnimation} 1.2s linear infinite;
  }
`;
