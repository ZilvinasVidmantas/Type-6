import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  InputAdornment,
  styled,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AuthService from '../../../services/auth-service';
import ConfirmationModal from './profile-page-confirmation-modal';

const Form = styled('form')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingRight: theme.spacing(10),
  },
  [theme.breakpoints.up('md')]: {
    paddingRight: 0,
  },
}));

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'At least 2 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Is required'),
  surname: yup
    .string()
    .min(2, 'At least 2 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Is required'),
  email: yup
    .string()
    .email('Is not valid email')
    .required('Is required'),
});

const ProfilePageForm = ({ name, surname, email }) => {
  const [emailBeingChecked, setEmailBeingChecked] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    setOpen(true);
  };

  const {
    values,
    errors,
    dirty,
    isValid,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name,
      surname,
      email,
    },
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const emailIsInitial = values.email === email;

  const handleEmailChange = (event) => {
    handleChange(event);
    if (event.target.value !== email && !errors.email) {
      (async () => {
        setEmailBeingChecked(true);
        const fetchedEmailAvailable = await AuthService.checkEmail(event.target.value);
        setEmailBeingChecked(false);
        setEmailAvailable(fetchedEmailAvailable);
      })();
    }
  };

  let emailAdornment;
  if (!emailIsInitial && !errors.email) {
    if (emailBeingChecked) {
      emailAdornment = <InputAdornment position="end"><CircularProgress size={24} /></InputAdornment>;
    } else {
      emailAdornment = emailAvailable
        ? <InputAdornment position="end"><CheckCircleIcon color="success" /></InputAdornment>
        : <InputAdornment position="end"><ErrorIcon color="error" /></InputAdornment>;
    }
  }

  return (
    <>
      <ConfirmationModal handleClose={() => setOpen(false)} open={open} formData={values} />
      <Form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Vardas"
            size="small"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            disabled={isSubmitting}
          />
          <TextField
            label="Pavardė"
            size="small"
            name="surname"
            value={values.surname}
            onChange={handleChange}
            error={Boolean(errors.surname)}
            helperText={errors.surname}
            disabled={isSubmitting}
          />
          <TextField
            label="Paštas"
            size="small"
            name="email"
            value={values.email}
            onChange={handleEmailChange}
            error={Boolean(errors.email) || !emailAvailable}
            helperText={errors.email ?? (emailAvailable ? undefined : 'paštas jau užimtas')}
            InputProps={{ endAdornment: emailAdornment }}
            disabled={isSubmitting}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!dirty || !isValid}
            sx={{ width: 120 }}
          >
            {isSubmitting ? <CircularProgress color="inherit" size={24} /> : 'Redaguoti'}
          </Button>
        </Box>
      </Form>
    </>
  );
};

export default ProfilePageForm;
