import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  grid-row: 1 / 3;
  grid-column: 1 / 1;
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

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  font-weight: bold;
  text-decoration: none;
  margin: 15px 20px 15px auto;
  position: relative;

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  &.active::after {
    opacity: 1;
  }
`;
