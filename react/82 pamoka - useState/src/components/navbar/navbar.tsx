import React from 'react';

import Container from '../container';
import {
  NavbarWrapper,
  NavbarLogo,
  NavbarNav,
  NavbarNavLink,
} from './styles';

const navbarLinksProps = [
  { href: '#home', title: 'Home' },
  { href: '#product', title: 'Product' },
  { href: '#company', title: 'Company' },
  { href: '#contacts', title: 'Contact' },
];

const Navbar: React.FC = () => (
  <NavbarWrapper>
    <Container>
      <NavbarLogo src="/assets/logo.svg" alt="page logo" />
      <NavbarNav>
        {navbarLinksProps.map(({ href, title }) => (
          <NavbarNavLink key={title} href={href}>{title}</NavbarNavLink>
        ))}
      </NavbarNav>
    </Container>
  </NavbarWrapper>
);

export default Navbar;
