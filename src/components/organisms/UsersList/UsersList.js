import React from 'react';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students List</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
