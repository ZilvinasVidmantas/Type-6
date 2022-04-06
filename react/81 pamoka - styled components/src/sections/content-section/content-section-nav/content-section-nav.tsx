import React from 'react';
import ContentSectionNavItem, { ContentSectionNavItemProps } from './content-section-nav-item';
import ContentSectionNavItemsContainer from './content-section-nav-items-container';

const navbarNavItemsProps: ContentSectionNavItemProps[] = [
  { href: '#home', title: 'Home' },
  { href: '#product', title: 'Product' },
  { href: '#company', title: 'Company' },
  { href: '#contacts', title: 'Contact' },
];

const style: React.CSSProperties = {
  width: 800,
};
const ContentSectionNav: React.FC = () => (
  <div style={style}>
    <h2>Navigation</h2>
    <ContentSectionNavItemsContainer>
      {navbarNavItemsProps.map((props) => <ContentSectionNavItem key={props.title} {...props} />)}
    </ContentSectionNavItemsContainer>
  </div>
);

export default ContentSectionNav;
