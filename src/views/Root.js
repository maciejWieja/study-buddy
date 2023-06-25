import React from 'react';
import { Wrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import FormField from 'components/moleculs/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/moleculs/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Navigate to="/group" />} />
          <Route path="/group/:id?" element={<Dashboard />} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

const UnAuthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span>Login is required</span>}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </form>
  );
};

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
