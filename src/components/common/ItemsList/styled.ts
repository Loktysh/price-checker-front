import styled from 'styled-components';
import { Flex, Grid } from '../../typography';
import { COLOR_GRAY_300 } from '../constants/colors';
import { SHADOW_SMALL } from '../constants/shadows';
import { Image } from '../types';

export const StyledHeading = styled.h1`
  color: ${COLOR_GRAY_300};
  width: 70%;
  margin: 3rem auto;
`;

export const StyledItemCard = styled.article`
  width: 100%;
  min-height: 500px;
  box-shadow: ${SHADOW_SMALL};
`;

export const StyledItemsPage = styled(Flex)`
  width: 85%;
  margin: 0 auto;
  position: relative;
`;

export const StyledItemsWrapper = styled(Grid)`
  grid-template-columns: repeat(3, 24%);
  padding: 3rem;
  width: 100%;
  height: 80vh;
  margin-left: 0;
  overflow-y: auto;
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

export const StyledRelatedItems = styled.aside`
  position: absolute;
  padding: 3rem;
  width: 24%;
  height: 80vh;
  right: 20px;
  top: 0;
  box-shadow: ${SHADOW_SMALL};
`;
