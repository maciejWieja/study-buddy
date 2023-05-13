import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const StyledLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 20px;
    text-align: right;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  font-weight: bold;
  text-decoration: none;
  margin: 15px 20px 15px auto;
`;
