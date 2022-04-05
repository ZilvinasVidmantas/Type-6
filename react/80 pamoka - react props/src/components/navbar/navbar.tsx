import React from 'react';
import theme from '../../theme';
import NavbarLogo from './navbar-logo';
import NavbarNav from './navbar-nav';

const style: React.CSSProperties = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  right: '0px',
  backgroundColor: 'black',
  color: 'white',
  height: theme.navbarHeight,
};

const Navbar: React.FC = () => (
  <div style={style}>
    <NavbarLogo />
    <NavbarNav />
  </div>
);

export default Navbar;
