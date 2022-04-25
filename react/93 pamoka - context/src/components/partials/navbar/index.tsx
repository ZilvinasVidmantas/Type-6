import {
  AppBar, Box, Container, Toolbar,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <AppBar position="sticky">
    <Container>
      <Toolbar sx={{
        px: { xs: 0, sm: 0 },
        justifyContent: 'space-between',
      }}
      >
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/register">Register</Link>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
