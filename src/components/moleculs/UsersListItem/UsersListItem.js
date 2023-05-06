import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UserListItem.style';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import UserAverage from 'components/atoms/UserAverage/UserAverage';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <UserAverage average={average}></UserAverage>
    <UserInfo name={name} attendance={attendance} />
    <Button />
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
