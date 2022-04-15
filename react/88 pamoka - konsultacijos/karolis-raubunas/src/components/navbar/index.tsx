import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => (
  <AppBar position="static" sx={{bgcolor: 'darkBlue.main'}}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Personal Blog
        </Typography>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/blog">Blog</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
