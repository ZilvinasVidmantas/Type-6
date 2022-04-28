import React, { useState } from 'react';
import {
  Box,
  Button,
  Container, Paper, TextField, Typography,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repPassword, setRepPassword] = useState<string>('');

  return (
    <Container sx={{ pt: 20 }}>
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
      >
        <SecurityIcon color="primary" sx={{ fontSize: 45 }} />
        <Typography component="h1" variant="h4">
          Register
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
          <TextField
            type="password"
            label="Repeat password"
            fullWidth
            value={repPassword}
            onChange={(e) => setRepPassword(e.target.value)}
          />
        </Box>
        <Button variant="contained" size="large" type="submit">Register</Button>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
