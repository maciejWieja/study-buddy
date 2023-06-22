import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Average } from 'components/atoms/Average/Average';
import {
  BigAverage,
  StyledDetails,
  StyledInfo,
  StyledLabel,
  StyledSubjectInfo,
  Wrapper,
} from 'components/moleculs/StudentDetails/StudentDetails.styles';

const StudentDetails = ({ student: { average, name, course, grades } }) => {
  return (
    <Wrapper>
      <BigAverage value={average}>{average}</BigAverage>
      <Title isBig>{name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {grades
          ? grades.map(({ subject, average }) => (
              <StyledSubjectInfo key={subject}>
                <StyledInfo>{subject}</StyledInfo>
                <Average value={average}>{average}</Average>
              </StyledSubjectInfo>
            ))
          : null}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentDetails;
