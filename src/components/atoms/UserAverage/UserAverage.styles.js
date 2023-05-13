import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  font-weight: bold;
  letter-spacing: -0.02em;
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, average }) =>
    average > 4 ? theme.colors.success : average > 3 ? theme.colors.warning : average > 2 ? theme.colors.error : theme.colors.grey};
`;
