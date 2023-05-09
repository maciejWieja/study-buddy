import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.style';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import UserAverage from 'components/atoms/UserAverage/UserAverage';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <UserAverage average={average}></UserAverage>
    <UserInfo name={name} attendance={attendance} />
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
