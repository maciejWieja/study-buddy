import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/moleculs/ViewWrapper/ViewWrapper';

const Dashboard = ({ users, deleteUser }) => (
  <ViewWrapper>
    <UsersList deleteUser={deleteUser} users={users} />
  </ViewWrapper>
);

export default Dashboard;
