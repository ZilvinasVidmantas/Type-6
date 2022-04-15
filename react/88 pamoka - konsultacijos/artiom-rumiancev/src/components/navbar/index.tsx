import {
  AppBar, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StyledNavLink from './navbar-link';
// import avocadoTheme, { avocadoSameHeightNavbar } from '../../styles/theme';
// import avocadoTheme from '../../styles/theme';

const Navbar: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Extra cheesy
        {' '}
        <FavoriteBorderIcon />
      </Typography>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/line1">Pick-up line 1</StyledNavLink>
      <StyledNavLink to="/line2">Pick-up line 2</StyledNavLink>
      <StyledNavLink to="/namuDarbai">ND 85</StyledNavLink>
      <StyledNavLink to="/petTinder">Pet Tinder</StyledNavLink>
    </Toolbar>
  </AppBar>

);

export default Navbar;
