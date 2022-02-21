import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  COLOR_GRAY_200,
  COLOR_GRAY_300,
  COLOR_GREEN_100,
  COLOR_GREEN_300,
  COLOR_WHITE,
} from '../constants/colors';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 6rem 1rem 10rem;
  display: flex;
  justify-content: space-between;
  background-color: ${COLOR_WHITE};

  @media (max-width: 800px) {
    padding: 2rem 2rem 1rem 3rem;
  }
`;

export const LeftSide = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

export const RightSide = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-end;

  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

export const FooterLink = styled(Link)`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${COLOR_GRAY_300};
  text-decoration: none;
  transition: 0.3s;

  :hover {
    color: ${COLOR_GRAY_200};
  }

  @media (max-width: 800px) {
    font-size: 1.8rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const GithubLink = styled.a`
  width: 25px;
  height: 25px;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`;

export const RssLink = styled.a`
  width: 70px;
  height: 40px;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    width: 50px;
    height: 20px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const PriceChecker = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLOR_GREEN_100};
  text-decoration: none;
  transition: 0.3s;

  :hover {
    color: ${COLOR_GREEN_300};
  }

  @media (max-width: 800px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const StyledSpan = styled.p`
  align-self: flex-end;
  margin: 0;
  font-size: 1.6rem;
  color: ${COLOR_GRAY_300};
`;
