import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: row;
  gap: 6%;
  padding-top: 8%;
  padding-bottom: 8%;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: lightgrey;
  }
  &:last-child {
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 5%;
  }
`;
