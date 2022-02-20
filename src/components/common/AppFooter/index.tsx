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
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export const AppFooter: FC = () => {
  const logged = useSelector((state: RootState) => state.login.logged);

  return (
    <FooterContainer>
      <LeftSide>
        {!logged ? (
          <FooterLink to='/about'>About Price Checker</FooterLink>
        ) : (
          <>
            <FooterLink to='/profile'>Home</FooterLink>
            <FooterLink to='/about'>About Price Checker</FooterLink>
          </>
        )}
      </LeftSide>
      <RightSide>
        <GithubLink href='https://github.com/Loktysh/price-checker-front' target='_blank'>
          <GithubLogo src={github} />
        </GithubLink>
        <PriceChecker to='/'>PRICE CHECKER</PriceChecker>
      </RightSide>
    </FooterContainer>
  );
};
