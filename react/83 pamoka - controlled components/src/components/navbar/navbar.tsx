import React from 'react';

import Container from '../container';
import {
  NavbarWrapper,
  NavbarLogo,
  NavbarNav,
  NavbarNavLink,
} from './styles';

const navbarLinksProps = [
  { href: '/state', title: 'State management' },
];

const Navbar: React.FC = () => (
  <NavbarWrapper>
    <Container>
      <a href="/">
        <NavbarLogo src="/assets/logo.svg" alt="page logo" />
      </a>
      <NavbarNav>
        {navbarLinksProps.map(({ href, title }) => (
          <NavbarNavLink key={title} href={href}>{title}</NavbarNavLink>
        ))}
      </NavbarNav>
    </Container>
  </NavbarWrapper>
);

export default Navbar;
