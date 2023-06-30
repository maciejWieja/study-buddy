import React from 'react';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/moleculs/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';
import AuthenticatedApp from './AuthenticatedApp';
import UnAuthenticatedApp from './UnAuthenticatedApp';

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  );
};

export default Root;
