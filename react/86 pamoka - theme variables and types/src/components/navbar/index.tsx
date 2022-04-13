import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
} from '@mui/material';
import NavbarLink from './navbar-link';
import Logo from '../logo';

const Navbar: React.FC = () => (
  <AppBar position="static" sx={{ bgcolor: 'grey.900' }}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Toolbar sx={(theme) => ({
        justifyContent: 'space-between',
        alignItems: 'center',
      })}
      >
        <Logo />
        <Box sx={{ alignSelf: 'stretch' }}>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/buttons">Buttons</NavbarLink>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
