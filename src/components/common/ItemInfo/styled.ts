import styled from 'styled-components';
import { Button, Flex } from '../../typography';
import { COLOR_GRAY_300, COLOR_GREEN_100, COLOR_GREEN_300, COLOR_WHITE } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Image } from '../types';

export const StyledInfoContainer = styled(Flex)`
  width: 55%;
  margin: 4rem auto 0;
  gap: 0 2rem;
  padding: 2rem;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
  flex-grow: 1;

  @media (max-width: 1000px) {
    width: 75%;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 98%;
    padding: 1rem;
  }
`;

export const StyledProductImage = styled.div<Image>`
  height: 250px;
  width: 35%;
  background-image: url(${props => (props ? props.bgImage : null)});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const StyledChartCard = styled.div`
  height: 580px;
  width: 55%;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_SMALL};
  margin: 2rem auto 6rem;
  padding: 3rem;

  @media (max-width: 1000px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 2rem;
  }

  @media (max-width: 600px) {
    width: 98%;
    padding: 1rem;
  }
`;

export const StyledWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledPriceWrapper = styled(Flex)`
  height: 30%;
  width: 100%;
`;

export const StyledHeading = styled.h3`
  margin: 0 0 1rem;
  font-size: 2.2rem;
  color: ${COLOR_GRAY_300};

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }

  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
`;

export const StyledParagraph = styled.p`
  color: ${COLOR_GRAY_300};
  font-size: 1.7rem;
  margin: 0.5rem 0;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

export const StyledDescription = styled.p`
  color: ${COLOR_GRAY_300};
  font-size: 1.5rem;
  margin: -1rem 0 0;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const StyledRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledItemPrice = styled.p`
  color: ${COLOR_GREEN_100};
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  margin-right: 4rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const StyledTrackButton = styled(Button)`
  font-size: 2rem;
  height: 40px;
  width: 150px;
  transition: 0.3s;
  border-radius: 2px;

  :hover {
    background-color: ${COLOR_GREEN_300};
  }

  @media (max-width: 768px) {
    width: 130px;
    font-size: 1.7rem;
    height: 35px;
  }

  @media (max-width: 500px) {
    width: 130px;
    font-size: 1.5rem;
    height: 35px;
  }
`;

export const StyledChartButton = styled(Button)`
  background-color: ${COLOR_GREEN_100};
  color: white;
  font-size: 1.2rem;
  height: 40px;
  width: 100px;
  border-radius: 2px;
  transition: 0.3s;

  :hover {
    background-color: ${COLOR_GREEN_300};
  }

  @media (max-width: 768px) {
    width: 130px;
    height: 50px;
  }
`;

export const StyledChartButtons = styled(Flex)`
  margin-bottom: 3rem;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

export const StyledChartContainer = styled.div`
  height: 80%;
`;
