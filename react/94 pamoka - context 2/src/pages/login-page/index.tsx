import React, { useState, useContext } from 'react';
import {
  Box,
  Button,
  Container, Paper, TextField, Typography,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AuthContext from '../../features/auth/auth-context';

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    login();
  };

  return (
    <Container sx={{ pt: 3 }}>
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
        onSubmit={handleSubmit}
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
        </Box>
        <Button variant="contained" size="large" type="submit">Login</Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
