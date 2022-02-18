import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { Button, Flex, Grid } from '../../typography';
import { COLOR_GRAY_300, COLOR_GREEN_100, COLOR_WHITE } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Image } from '../types';

type TrackInfo = {
  visible: boolean;
};

export const StyledHeading = styled.h1`
  color: ${COLOR_GRAY_300};
  width: 70%;
  margin: 3rem auto;

  @media (max-width: 1350px) {
    margin: 2rem auto;
  }
`;

export const StyledItemCard = styled.article`
  width: 100%;
  height: 500px;
  font-size: 1.3rem;
  box-shadow: ${SHADOW_SMALL};
  direction: ltr;
  background-color: ${COLOR_WHITE};
  padding: 1.5rem;

  @media (max-width: 1350px) {
    padding: 1rem;
    height: 38rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding-left: 2rem;
  }

  @media (max-width: 900px) {
    height: 43rem;
  }

  @media (max-width: 900px) {
    height: 43rem;
  }
`;

export const StyledItemsPage = styled(Flex)`
  width: 85%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1350px) {
    width: 98%;
  }
`;

export const StyledItemContainer = styled(Flex)`
  width: 75%;
  height: 80vh;

  @media (max-width: 1350px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const StyledItemsWrapper = styled(Grid)`
  padding: 3rem;
  width: 100%;
  height: 100%;
  margin-left: 0;
  overflow-y: auto;
  direction: rtl;
  gap: 4rem 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    padding: 1rem;
    gap: 2rem 1rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledItemImage = styled.div<Image>`
  width: 100%;
  height: 60%;
  margin: 3rem 0;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: relative;
  z-index: 1;

  @media (max-width: 1350px) {
    margin: 1.5rem 0;
    height: 55%;
  }
`;

export const StyledItemName = styled.h3`
  margin: 1rem 0;
  font-weight: 600;
  padding-bottom: 1rem;

  @media (max-width: 1050px) {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }
`;

export const StyledItemPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${COLOR_GREEN_100};
  text-align: center;

  @media (max-width: 1050px) {
    font-size: 1.4rem;
  }
`;

export const StyledItemRating = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
  margin-right: 1rem;
  color: ${COLOR_GRAY_300};
`;

export const StyledLoadButton = styled(Button)`
  height: 5rem;
  width: 20rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  border-radius: 2px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1050px) {
    height: 4rem;
    width: 17rem;
    font-size: 1.3rem;
  }
`;

export const StyledTrackButton = styled.button`
  position: absolute;
  z-index: 10;
  outline: 0;
  border: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  right: 4%;
  pointer-events: all;

  @media (max-width: 1250px) {
    background-color: ${COLOR_WHITE};
    border-radius: 50%;
  }
`;

export const AddButton = styled(FaPlus)`
  height: 100%;
  width: 100%;
  font-size: 2rem;
  color: ${COLOR_GREEN_100};
`;

export const RemoveButton = styled(FaTrashAlt)`
  height: 100%;
  width: 100%;
  font-size: 2rem;
`;

export const StyledTrackInfo = styled(Flex)<TrackInfo>`
  height: 5rem;
  width: 100%;
  background-color: ${COLOR_GREEN_100};
  position: absolute;
  bottom: 0px;
  transition: all 0.2s ease;
  opacity: ${props => (props.visible ? 1 : 0)};

  @media (max-width: 1000px) {
    height: 4rem;
  }
`;

export const StyledTrackMessage = styled.p`
  font-size: 1.4rem;
  color: ${COLOR_WHITE};
  opacity: 1;
`;
