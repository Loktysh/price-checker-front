import styled from 'styled-components';

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
