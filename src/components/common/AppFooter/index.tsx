import React, { FC } from 'react';
import {
  FooterContainer,
  FooterLink,
  GithubLink,
  Logo,
  LeftSide,
  PriceChecker,
  RightSide,
  RssLink,
  StyledSpan,
} from './styled';
import github from './github.svg';
import rss from './rss.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export const AppFooter: FC = () => {
  const { logged, userLogin } = useSelector((state: RootState) => state.login);

  return (
    <FooterContainer>
      <LeftSide>
        {!logged ? (
          <FooterLink to='/about'>About Price Checker</FooterLink>
        ) : (
          <>
            <FooterLink to={'/profile/' + userLogin}>Home</FooterLink>
            <FooterLink to='/about'>About Price Checker</FooterLink>
          </>
        )}
      </LeftSide>
      <StyledSpan>2022</StyledSpan>
      <RightSide>
        <GithubLink href='https://github.com/Loktysh/price-checker-front' target='_blank'>
          <Logo src={github} />
        </GithubLink>
        <PriceChecker to='/'>PRICE CHECKER</PriceChecker>
        <RssLink href='https://rs.school/js/' target='_blank'>
          <Logo src={rss} />
        </RssLink>
      </RightSide>
    </FooterContainer>
  );
};
