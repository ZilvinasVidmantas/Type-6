import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

type AuthFormProps = {
  formTitle: string,
  submitText: string,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const AuthForm: React.FC<AuthFormProps> = ({
  formTitle,
  submitText,
  onSubmit,
  children,
}) => (
  <Container sx={{ pt: 10 }}>
    <Paper
      component="form"
      elevation={3}
      sx={{
        display: 'flex',
        mx: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        p: 3,
        width: 400,
      }}
      onSubmit={onSubmit}
    >
      <SecurityIcon color="primary" sx={{ fontSize: 45 }} />
      <Typography component="h1" variant="h4">{formTitle}</Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 1 / 1,
        my: 2,
      }}
      >
        {children}
      </Box>
      <Button variant="contained" size="large" type="submit">{submitText}</Button>
    </Paper>
  </Container>
);

export default AuthForm;
