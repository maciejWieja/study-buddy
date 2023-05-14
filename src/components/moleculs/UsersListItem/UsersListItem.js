import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import UserAverage from 'components/atoms/UserAverage/UserAverage';
import { UserShape } from 'types';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <UserAverage average={average}></UserAverage>
    <UserInfo name={name} attendance={attendance} />
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
