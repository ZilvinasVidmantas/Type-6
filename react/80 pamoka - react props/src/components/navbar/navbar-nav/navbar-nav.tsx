import React from 'react';
import theme from '../../../theme';
import NavbarNavItem, { NavbarNavItemProps } from './navbar-nav-item';

const style: React.CSSProperties = {
  display: 'flex',
  gap: 5,
  height: 60,
  paddingTop: 10,
  paddingBottom: 10,
  background: theme.colors.dark,
};

const navbarNavItemsProps: NavbarNavItemProps[] = [
  { href: '#home', title: 'Home' },
  { href: '#product', title: 'Product' },
  { href: '#company', title: 'Company' },
  { href: '#contacts', title: 'Contact' },
];

const NavbarNav: React.FC = () => (
  <div style={style}>
    {navbarNavItemsProps.map((props) => <NavbarNavItem {...props} />)}
  </div>
);

export default NavbarNav;
