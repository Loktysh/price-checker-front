import styled from 'styled-components';
import { Grid } from '../../typography';
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

export const StyledItemsWrapper = styled(Grid)`
  width: 70%;
  height: 80vh;
  margin: 0 auto;
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
