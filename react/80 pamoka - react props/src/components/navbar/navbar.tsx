import React from 'react';
import theme from '../../theme';
import Container from '../container';
import NavbarLogo from './navbar-logo';
import NavbarNav from './navbar-nav';

const style: React.CSSProperties = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  right: '0px',
  backgroundColor: theme.colors.dark,
  color: theme.colors.white,
  height: theme.navbarHeight,
};

const Navbar: React.FC = () => (
  <div style={style}>
    <Container>
      <NavbarLogo />
      <NavbarNav />
    </Container>
  </div>
);

export default Navbar;
