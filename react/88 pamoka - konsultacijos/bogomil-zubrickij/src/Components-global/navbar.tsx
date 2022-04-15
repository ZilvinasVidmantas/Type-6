import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StyledNavLink from '../Styles/custom-styles/styled-nav-link';

const NavBar: React.FC = () => (
  <AppBar position="static" sx={{ mb: 6, bgcolor: '#000000' }}>
    <Container>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyCompanyLogo
        </Typography>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/pricing">Pricing</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/support">Support</StyledNavLink>
      </Toolbar>
    </Container>
  </AppBar>
);
export default NavBar;
