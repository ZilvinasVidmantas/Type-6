import React from 'react';
import {
  Box,
  Button,
  Container, Paper, TextField, Typography,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

const LoginPage: React.FC = () => (
  <Container sx={{ pt: 20 }}>
    <Paper
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
    >
      <SecurityIcon color="primary" sx={{ fontSize: 45 }} />
      <Typography component="h1" variant="h4">
        Login
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 1 / 1,
        my: 2,
      }}
      >
        <TextField
          type="email"
          label="Email"
          fullWidth
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
        />
      </Box>

      <Button variant="contained" size="large">Login</Button>

    </Paper>
  </Container>
);

export default LoginPage;
