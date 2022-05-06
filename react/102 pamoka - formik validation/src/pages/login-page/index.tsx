import React, { useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField } from '@mui/material';

import AuthContext from '../../features/auth/auth-context';
import AuthForm from '../../components/auth-form';

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nextPage = searchParams.get('next') ?? '/';
    login({ email, password }, nextPage);
  };

  return (
    <AuthForm
      formTitle="Login"
      submitText="Login"
      onSubmit={handleSubmit}
    >
      <TextField
        type="email"
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </AuthForm>
  );
};

export default LoginPage;
