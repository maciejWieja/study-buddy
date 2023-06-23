import React from 'react';
import { StyledLink, StyledLogo, Wrapper } from './Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <StyledLogo>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </StyledLogo>
    <StyledLink to="/group">Dashboard</StyledLink>
    <StyledLink as="a" onClick={() => localStorage.removeItem('token')}>
      Logout
    </StyledLink>
  </Wrapper>
);

export default Navigation;
