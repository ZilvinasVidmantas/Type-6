import React from 'react';
import {
  AppBar,
  Container,
  Box,
  Button,
} from '@mui/material';
import NavbarLink from './navbar-link';
import Logo from '../logo';

const Navbar: React.FC = () => (
  <AppBar position="static" sx={{ bgcolor: 'grey.900' }}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Box sx={(theme) => theme.mixins.navbar}>
        <Logo />
        <Button sx={(theme) => ({
          backgroundColor: theme.palette.manoSpalva.main,
        })}
        >
          afasd
        </Button>
        <Box sx={{ alignSelf: 'stretch' }}>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/buttons">Buttons</NavbarLink>
        </Box>
      </Box>
    </Container>
  </AppBar>
);

export default Navbar;
