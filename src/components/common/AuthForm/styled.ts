import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_GRAY_100,
  COLOR_GRAY_200,
  COLOR_GRAY_300,
  COLOR_GREEN_100,
  COLOR_WHITE,
} from '../constants/colors';

export const StyledForm = styled.form`
  margin: auto;
  width: 40rem;
`;

export const FormTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 2.4rem;
  color: ${COLOR_GRAY_300};
`;

export const StyledInput = styled.input`
  border: 1px solid ${COLOR_GRAY_200};
  width: 100%;
  height: 3.5rem;
  padding: 1rem 1.5rem;
  border-radius: 2px;

  ::placeholder {
    color: ${COLOR_GRAY_200};
    font-size: 1.2rem;
  }

  :hover {
    border-color: ${COLOR_BLACK};
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

export const BasicLinkStyle = styled.a`
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
`;
