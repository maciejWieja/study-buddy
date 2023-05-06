import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.style';
import { StyledList } from './UsersList.style';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} key={userData.name} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
