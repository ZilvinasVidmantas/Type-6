import React from 'react';
import { Toolbar } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../logo';
import { StyledAppBar, StyledLink, ToolBarStyle } from './navbar-styles';

const Navbar: React.FC = () => (
  <StyledAppBar>
    <Logo />
    <Toolbar style={ToolBarStyle}>
      <StyledLink to="/"><HomeOutlinedIcon /></StyledLink>
      <StyledLink to="/about"><InfoOutlinedIcon /></StyledLink>
      <StyledLink to="/profile"><PersonIcon /></StyledLink>
    </Toolbar>
  </StyledAppBar>
);

export default Navbar;
