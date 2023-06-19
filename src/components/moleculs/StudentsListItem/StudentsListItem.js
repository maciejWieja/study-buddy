import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './StudentsListItem.styles';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import UserAverage from 'components/atoms/UserAverage/UserAverage';
import { UserShape } from 'types';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <UserAverage average={average}></UserAverage>
      <UserInfo name={name} attendance={attendance} />
      <DeleteButton />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
