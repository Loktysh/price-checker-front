import styled from 'styled-components';
import { Button, Flex, Grid } from '../../typography';
import { COLOR_GRAY_300, COLOR_WHITE } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Image } from '../types';

export const StyledHeading = styled.h1`
  color: ${COLOR_GRAY_300};
  width: 70%;
  margin: 3rem auto;
`;

export const StyledItemCard = styled.article`
  width: 100%;
  height: 500px;
  font-size: 1.3rem;
  box-shadow: ${SHADOW_SMALL};
  direction: ltr;
  background-color: ${COLOR_WHITE};
`;

export const StyledItemsPage = styled(Flex)`
  width: 85%;
  margin: 0 auto;
  position: relative;
`;

export const StyledItemContainer = styled(Flex)`
  width: 75%;
  height: 80vh;
`;

export const StyledItemsWrapper = styled(Grid)`
  padding: 3rem;
  width: 100%;
  height: 100%;
  margin-left: 0;
  overflow-y: auto;
  direction: rtl;
`;

export const StyledItemImage = styled.div<Image>`
  width: 90%;
  height: 70%;
  margin: 1rem auto 3rem;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center center;
`;

export const StyledItemName = styled.h3`
  margin: 2rem;
`;

export const StyledItemDescription = styled.p`
  margin: 1rem 2rem;
`;

export const StyledLoadButton = styled(Button)`
  height: 5rem;
  width: 20rem;
  margin: 1rem 0;
  font-size: 1.5rem;
`;
