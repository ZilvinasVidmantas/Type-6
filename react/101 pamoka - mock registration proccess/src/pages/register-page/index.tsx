import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import AuthForm from '../../components/auth-form';
import AuthContext from '../../features/auth/auth-context';

const RegisterPage: React.FC = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const handleRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    register({ email, password, repeatPassword });
  };

  return (
    <AuthForm
      formTitle="Register"
      submitText="Register"
      onSubmit={handleRegister}
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
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
    </AuthForm>
  );
};

export default RegisterPage;
