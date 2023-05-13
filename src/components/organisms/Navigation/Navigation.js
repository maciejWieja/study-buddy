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
    <StyledLink to="/">Dashboard</StyledLink>
    <StyledLink to="/add-user">Add user</StyledLink>
    <StyledLink to="/">Settings</StyledLink>
    <StyledLink to="/">Logout</StyledLink>
  </Wrapper>
);

export default Navigation;
