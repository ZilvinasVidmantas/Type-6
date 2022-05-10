import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import AuthForm from '../../components/auth-form';
import AuthContext from '../../features/auth/auth-context';
import { UserRegistration } from '../../types';

type RegisterConfig = FormikConfig<UserRegistration>;

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const RegisterPage: React.FC = () => {
  const { register } = useContext(AuthContext);

  const handleRegister: RegisterConfig['onSubmit'] = ({ email, password, repeatPassword }) => {
    register({ email, password, repeatPassword });
  };

  const {
    values,
    handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: handleRegister,
  });

  return (
    <AuthForm
      formTitle="Register"
      submitText="Register"
      onSubmit={handleSubmit}
    >
      <TextField
        name="email"
        type="email"
        label="Email"
        fullWidth
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        fullWidth
        value={values.password}
        onChange={handleChange}
      />
      <TextField
        name="repeatPassword"
        type="password"
        label="Repeat password"
        fullWidth
        value={values.repeatPassword}
        onChange={handleChange}
      />
    </AuthForm>
  );
};

export default RegisterPage;
