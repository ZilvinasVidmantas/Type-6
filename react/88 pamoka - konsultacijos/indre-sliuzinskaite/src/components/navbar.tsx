import React from 'react';
import {
  AppBar, Toolbar, Container, Typography, styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  textDecoration: 'none',
  alignSelf: 'stretch',
  padding: theme.spacing(0, 4),
  transition: theme.transitions.create('color'),

  '&.active': {
    background: theme.palette.grey[800],
    boxShadow: `inset 0 -4px 0 0 ${theme.palette.primary.dark}`,
  },

  ':hover': {
    color: theme.palette.primary.light,
  },
}));

const Navbar: React.FC = () => (
  <AppBar position="static" sx={{ bgcolor: 'grey.900' }}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Įdomios nakvynės
        </Typography>
        <StyledNavLink to="/">Įvairovė</StyledNavLink>
        <StyledNavLink to="/vietoves">Vietovės</StyledNavLink>
        <StyledNavLink to="/ispudziai">Įspūdžiai</StyledNavLink>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
