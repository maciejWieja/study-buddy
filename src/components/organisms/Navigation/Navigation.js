import React from 'react';
import { StyledLink, StyledLogo, Wrapper } from './Navigation.styles';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <StyledLogo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </StyledLogo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
