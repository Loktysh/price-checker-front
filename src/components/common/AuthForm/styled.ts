import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_GRAY_200,
  COLOR_GRAY_300,
  COLOR_GREEN_100,
  COLOR_RED,
  COLOR_WHITE,
} from '../constants/colors';

export const StyledForm = styled.form`
  margin: auto;
  width: 40rem;

  @media (max-width: 600px) {
    width: 30rem;
  }
`;

export const FormTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 2.4rem;
  color: ${COLOR_GRAY_300};

  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

export const AuthError = styled.h3`
  margin: 0;
  line-height: 3rem;
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: -3rem;
  margin-bottom: -3rem;
  color: ${COLOR_RED};
`;

export const StyledInput = styled.input`
  border: 1px solid ${COLOR_GRAY_200};
  width: 100%;
  height: 3.5rem;
  padding: 1rem 1.5rem;
  border-radius: 2px;
  font-size: 2rem;
  color: ${COLOR_BLACK};

  ::placeholder {
    color: ${COLOR_GRAY_200};
    font-size: 1.2rem;
  }

  :hover {
    border-color: ${COLOR_BLACK};
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledCheckbox = styled.input`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 2px;
  border: 1px solid ${COLOR_GRAY_200};
`;

export const OptionalStyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledRememberOptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${COLOR_GRAY_300};
  margin-left: 1rem;

  :hover {
    color: ${COLOR_BLACK};
  }
`;

export const BasicReactRouterLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${COLOR_GRAY_300};

  :hover {
    color: ${COLOR_BLACK};
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 3.5rem;
  background-color: ${COLOR_GREEN_100};
  color: ${COLOR_WHITE};
  font-size: 1.7rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 2px;

  :hover {
    border-color: ${COLOR_BLACK};
  }

  @media (max-width: 600px) {
    width: 90%;
    font-weight: 500;
  }
`;

export const StyledErrorMessage = styled.p`
  margin: -2rem 0 -2rem;
  font-size: 1.2rem;
  color: ${COLOR_RED};
`;
