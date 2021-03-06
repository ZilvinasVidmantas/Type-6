import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup';
import validator from 'validator';
import AuthForm from '../../components/auth-form';
import AuthContext from '../../features/auth/auth-context';
import { UserRegistration } from '../../types';
import AuthService from '../../features/auth/auth-service';

type RegisterConfig = FormikConfig<UserRegistration>;

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Required')
    .test(
      'emailAvailabilityCheck',
      'Email is not valid',
      async (email, context) => {
        if (!email) return false;
        if (!validator.isEmail(email)) return false;

        const emailIsAvailable = await AuthService.checkEmailAvailability(email);
        if (!emailIsAvailable) {
          throw context.createError({
            message: 'Email is taken',
          });
        }

        return true;
      },
    ),
  password: Yup.string()
    .required('Required')
    .min(8, 'Min 8 symbols')
    .max(32, 'Max 32 symbols')
    .matches(/[A-ZĄČĘĖĮŠŲŪŽ]/, 'Upper case letter required')
    .matches(/[a-ząčęėįšųūž]/, 'Lower case letter required')
    .matches(/\d/, 'Number is required'),
  repeatPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Password do not match'),
});

const RegisterPage: React.FC = () => {
  const { register } = useContext(AuthContext);

  const handleRegister: RegisterConfig['onSubmit'] = ({ email, password, repeatPassword }) => {
    register({ email, password, repeatPassword });
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <AuthForm
      formTitle="Register"
      submitText="Register"
      btnActive={dirty && isValid}
      onSubmit={handleSubmit}
    >
      <TextField
        name="email"
        type="email"
        label="Email"
        fullWidth
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <TextField
        name="repeatPassword"
        type="password"
        label="Repeat password"
        fullWidth
        value={values.repeatPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.repeatPassword && Boolean(errors.repeatPassword)}
        helperText={touched.repeatPassword && errors.repeatPassword}
      />
    </AuthForm>
  );
};

export default RegisterPage;
