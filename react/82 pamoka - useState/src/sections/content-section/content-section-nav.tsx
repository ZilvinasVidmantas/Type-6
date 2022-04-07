import React from 'react';
import {
  ContentSectionNavWrapper,
  ContentSectionNavLinksContainer,
  ContentSectionNavLink,
} from './styles';

const navbarNavLinksProps = [
  { href: '#home', title: 'Home' },
  { href: '#product', title: 'Product' },
  { href: '#company', title: 'Company' },
  { href: '#contacts', title: 'Contact' },
];

const ContentSectionNav: React.FC = () => (
  <ContentSectionNavWrapper>
    <h2>Navigation</h2>
    <ContentSectionNavLinksContainer>
      {navbarNavLinksProps.map(({ href, title }) => (
        <ContentSectionNavLink key={title} href={href}>
          {title}
        </ContentSectionNavLink>
      ))}
    </ContentSectionNavLinksContainer>
  </ContentSectionNavWrapper>
);

export default ContentSectionNav;
