import styled from 'styled-components';
import { COLOR_GRAY_300, COLOR_GREEN_300, COLOR_GREEN_100 } from '../../common/constants/colors';
import { Button, Flex } from '../../typography';

export const StyledNotLogged = styled.p`
  font-size: 2rem;
  color: ${COLOR_GRAY_300};
`;

export const NotLoggedWrapper = styled(Flex)`
  height: 200px;
  width: 55%;
  margin: 0 auto;

  flex-grow: 1;
`;

export const NotLoggedButton = styled(Button)`
  height: 40px;
  width: 100px;
  font-size: 1.8rem;
  border-radius: 2px;
  background-color: ${COLOR_GREEN_300};
  transition: 0.3s;

  :hover {
    background-color: ${COLOR_GREEN_100};
  }
`;
