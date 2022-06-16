import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import validator from 'validator';
import * as Yup from 'yup';
import {
  Typography,
  Container,
  Box,
  TextField,
  Paper,
  Button,
  TextFieldProps,
} from '@mui/material';
import Img from '../../components/img';
import { useRootSelector } from '../../store/hooks';
import { selectAuthUser } from '../../store/selectors';
import AuthService from '../../services/auth-service';

type UserUpdateValues = {
  email: string,
  name: string,
  surname: string,
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
        try {
          const emailIsAvailable = await AuthService.checkEmailAvailability(email);
          return emailIsAvailable;
        } catch (error) {
          throw context.createError({
            message: error instanceof Error ? error.message : error as string,
          });
        }
      },
    ),
  name: Yup.string()
    .min(2, 'min 2 raidės')
    .max(16, 'max 16 raidžių'),
  surname: Yup.string()
    .min(2, 'min 2 raidės')
    .max(16, 'max 16 raidžių'),
});

const ProfilePage: React.FC = () => {
  const user = useRootSelector(selectAuthUser);
  const imageFieldRef = useRef<HTMLInputElement>(null);

  if (user === null) throw new Error('Needed Authorization');

  const updateUser = () => {
    console.log('Atnaujinamas vartotojas');
  };

  const uploadImage = () => {
    const input = imageFieldRef.current as HTMLInputElement;
    input.click();
  };

  const {
    values,
    initialValues,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldError,
  } = useFormik<UserUpdateValues>({
    initialValues: {
      email: user.email,
      name: user.name ?? '',
      surname: user.surname ?? '',
    },
    onSubmit: updateUser,
    validationSchema,
  });

  const needsProfileUpdate = user && (!user.name || !user.surname || !user.img);

  useEffect(() => {
    if (errors.email && values.email === initialValues.email) {
      setFieldError('email', undefined);
    }
  }, [errors]);

  return (
    <Container>

      <Paper sx={{
        my: 5,
        p: 3,
        display: 'flex',
        gap: 3,
      }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flexGrow: 1,
          }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>Vartotojo duomenys</Typography>
          <TextField
            name="email"
            label="El. Paštas"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <TextField
            name="name"
            label="Vardas"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
          />
          <TextField
            name="surname"
            label="Pavardė"
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.surname && !!errors.surname}
            helperText={touched.surname && errors.surname}
          />
          <Button
            variant="contained"
            sx={{ alignSelf: 'center  ', mt: 3 }}
            size="large"
            type="submit"
          >
            Atnaujinti vartotoją
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Img src={user.img ?? '/no-image.jpg'} sx={{ display: 'block', width: 300, height: 300 }} />
          <Button sx={{ mt: 2 }} variant="contained" onClick={uploadImage}>Įkelti nuotrauką</Button>
          <TextField
            type="file"
            sx={{ display: 'none' }}
            inputRef={imageFieldRef}
            inputProps={{
              accept: 'image/png, image/jpeg',
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
