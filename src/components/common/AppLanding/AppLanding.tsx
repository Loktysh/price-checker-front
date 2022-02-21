import React from 'react';
import { LandingWrapper, StyledImage, StyledLandingH, StyledLogo } from './styled';
import landingImage1 from '../../../assets/land1.jpg';
import landingImage2 from '../../../assets/land2.jpg';

const AppLanding = () => {
  return (
    <LandingWrapper>
      <StyledLandingH>Search products:</StyledLandingH>
      <StyledImage src={landingImage1} alt='Phone search results' />
      <StyledLandingH>Track prices by day or week:</StyledLandingH>
      <StyledImage src={landingImage2} alt='Single product information with chart' />
      <StyledLandingH>Created using API by:</StyledLandingH>
      <StyledLogo
        src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-onliner-by.png'
        alt='Onliner logo'
      />
    </LandingWrapper>
  );
};

export default AppLanding;
