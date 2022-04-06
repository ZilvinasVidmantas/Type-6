import React from 'react';
import theme from '../../../theme';

export type NavbarNavItemProps = {
  href: string,
  title: string
};

const style: React.CSSProperties = {
  display: 'block',
  height: '100%',
  padding: 10,
  color: theme.colors.white,
  textDecoration: 'none',
};

const NavbarNavItem: React.FC<NavbarNavItemProps> = ({ href, title }) => (
  <a href={href} style={style}>{title}</a>
);

export default NavbarNavItem;
