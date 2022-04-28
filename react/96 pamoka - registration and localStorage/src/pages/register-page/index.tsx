import React, { useState } from 'react';
import { TextField } from '@mui/material';

import AuthForm from '../../components/auth-form';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repPassword, setRepPassword] = useState<string>('');

  return (
    <AuthForm
      formTitle="Register"
      submitText="Register"
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
      <TextField
        type="password"
        label="Repeat password"
        fullWidth
        value={repPassword}
        onChange={(e) => setRepPassword(e.target.value)}
      />
    </AuthForm>
  );
};

export default RegisterPage;
