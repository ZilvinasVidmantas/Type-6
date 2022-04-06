import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import NavbarLogo from './navbar-logo';
import NavbarNav from './navbar-nav';

const Navbar = styled.div(({ theme }) => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    height: ${theme.navbarHeight}px;
`);

const NavbarComponent: React.FC = () => (
  <Navbar>
    <Container>
      <NavbarLogo />
      <NavbarNav />
    </Container>
  </Navbar>
);

export default NavbarComponent;
