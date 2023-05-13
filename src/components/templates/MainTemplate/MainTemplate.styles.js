import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
`;
