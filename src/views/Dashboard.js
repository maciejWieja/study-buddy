import React, { useContext } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/moleculs/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
