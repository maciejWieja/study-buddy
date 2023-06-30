import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import FormField from 'components/moleculs/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { FormWrapper } from './UnAuthenticatedAdd.styles';

const UnAuthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper onSubmit={handleSubmit(auth.signIn)}>
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span>Login is required</span>}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </FormWrapper>
  );
};

export default UnAuthenticatedApp;
