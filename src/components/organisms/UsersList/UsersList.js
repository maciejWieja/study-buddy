import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students List</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;