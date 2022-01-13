export interface FlexStyling {
  justify?: string;
  alignItems?: string;
  alignContent?: string;
  direction?: string;
  wrap?: string;
  gap?: string;
}

export interface GridStyling {
  repeat?: boolean;
  columns?: string;
  rows?: string;
  gap?: string;
  justifyItems?: string;
  alignItems?: string;
  justifyContent?: string;
  alignContent?: string;
}

export interface FlexElementStyling {
  order: number;
  grow: number;
  shrink: number;
  align: number;
}

export interface GridElementStyling {
  row?: string;
  column?: string;
  justifySelf?: string;
  alignSelf?: string;
}
