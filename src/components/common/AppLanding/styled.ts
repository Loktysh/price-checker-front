import styled from 'styled-components';
import { COLOR_GRAY_300 } from '../constants/colors';

export const LandingWrapper = styled.main`
  width: 55%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLandingH = styled.h2`
  font-size: 2.5rem;
  color: ${COLOR_GRAY_300};
  text-align: center;
  margin: 5rem 0 1rem;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledLogo = styled.img`
  width: 40%;
  margin: 0 auto 5rem;
  height: auto;
`;
