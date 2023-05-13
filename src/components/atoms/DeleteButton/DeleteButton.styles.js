import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 6px;
  right: 15px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
