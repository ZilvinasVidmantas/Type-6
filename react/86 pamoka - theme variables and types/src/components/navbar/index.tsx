import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
} from '@mui/material';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => (
  <AppBar position="static" sx={{ bgcolor: 'grey.900' }}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React CA
        </Typography>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/buttons">Buttons</NavbarLink>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
