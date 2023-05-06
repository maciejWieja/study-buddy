import styled from 'styled-components';

export const StyledNameParagraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const StyledAttendanceParagraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
