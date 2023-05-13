import React from 'react';
import { StyledNameParagraph, StyledAttendanceParagraph } from './UserInfo.styles';

const UserInfo = ({ name, attendance }) => (
  <div>
    <StyledNameParagraph>{name}</StyledNameParagraph>
    <StyledAttendanceParagraph>attendance: {attendance}</StyledAttendanceParagraph>
  </div>
);

export default UserInfo;
