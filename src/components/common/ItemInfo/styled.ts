import styled from 'styled-components';
import { Button, Flex } from '../../typography';
import { COLOR_GRAY_300, COLOR_GREEN_100, COLOR_WHITE } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Image } from '../types';

export const StyledInfoContainer = styled(Flex)`
  width: 55%;
  height: 400px;
  margin: 4rem auto 0;
  gap: 0 2rem;
  padding: 3rem;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
`;

export const StyledProductImage = styled.div<Image>`
  height: 350px;
  width: 35%;
  background-image: url(${props => (props ? props.bgImage : null)});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: relative;
  z-index: 1;
`;

export const StyledChartCard = styled.div`
  height: 500px;
  width: 55%;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
  margin: 2rem auto 6rem;
  padding: 5rem;
`;

export const StyledWrapper = styled.div`
  height: 350px;
  width: 65%;
`;

export const StyledPriceWrapper = styled(Flex)`
  height: 30%;
  width: 100%;
  padding-top: 10%;
  justify-content: flex-end;
`;

export const StyledHeading = styled.h3`
  margin: 0 0 2rem;
  font-size: 2.4rem;
  color: ${COLOR_GRAY_300};
`;

export const StyledParagraph = styled.p`
  color: ${COLOR_GRAY_300};
  font-size: 1.5rem;
`;

export const StyledItemPrice = styled.p`
  color: ${COLOR_GREEN_100};
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  margin-right: 4rem;
`;

export const StyledTrackButton = styled(Button)`
  font-size: 2rem;
  height: 50px;
  width: 150px;
`;

export const StyledChartButton = styled(Button)`
  background-color: ${COLOR_GREEN_100};
  color: white;
  font-size: 1.2rem;
  height: 40px;
  width: 100px;
`;
