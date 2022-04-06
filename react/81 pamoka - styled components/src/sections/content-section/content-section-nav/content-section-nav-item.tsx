import React from 'react';
import theme from '../../../theme';

export type ContentSectionNavItemProps = {
  title: string,
  href: string,
};

const style: React.CSSProperties = {
  padding: 20,
  background: theme.colors.grey,
  textDecoration: 'none',
  color: theme.colors.dark,
};

const ContentSectionNavItem: React.FC<ContentSectionNavItemProps> = ({ title, href }) => (
  <a style={style} href={href}>{title}</a>
);

export default ContentSectionNavItem;
