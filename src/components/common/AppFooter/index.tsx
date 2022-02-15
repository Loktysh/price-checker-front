import React, { FC } from 'react';
import {
  FooterContainer,
  FooterLink,
  GithubLink,
  GithubLogo,
  LeftSide,
  PriceChecker,
  RightSide,
} from './styled';
import github from './github.svg';

interface FooterProps {
  userLogged: boolean;
}

export const AppFooter: FC<FooterProps> = ({ userLogged }) => {
  return (
    <FooterContainer>
      <LeftSide>
        {!userLogged ? (
          <FooterLink to='/about'>About Price Checker</FooterLink>
        ) : (
          <>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/about'>About Price Checker</FooterLink>
          </>
        )}
      </LeftSide>
      <RightSide>
        <GithubLink href='github.com' target='_blank'>
          <GithubLogo src={github} />
        </GithubLink>
        <PriceChecker to='/'>PRICE CHECKER</PriceChecker>
      </RightSide>
    </FooterContainer>
  );
};
