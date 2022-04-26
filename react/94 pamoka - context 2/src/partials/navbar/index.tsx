import {
  AppBar, Box, Container, Toolbar,
} from '@mui/material';
import React from 'react';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => (
  <AppBar position="sticky" sx={{ bgcolor: 'grey.900' }}>
    <Container>
      <Toolbar sx={{
        px: { xs: 0, sm: 0 },
        justifyContent: 'space-between',
      }}
      >
        <Box>
          <NavbarLink to="/">Home</NavbarLink>
        </Box>
        <Box>
          <NavbarLink to="/auth/login">Login</NavbarLink>
          <NavbarLink to="/auth/register">Register</NavbarLink>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
