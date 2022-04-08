import React from 'react';
import {
  HomePageContentSectionNavWrapper,
  HomePageContentSectionNavLinksContainer,
  HomePageContentSectionNavLink,
} from './styles';

const navbarNavLinksProps = [
  { href: '#home', title: 'Home' },
  { href: '#product', title: 'Product' },
  { href: '#company', title: 'Company' },
  { href: '#contacts', title: 'Contact' },
];

const HomePageContentSectionNav: React.FC = () => (
  <HomePageContentSectionNavWrapper>
    <h2>Navigation</h2>
    <HomePageContentSectionNavLinksContainer>
      {navbarNavLinksProps.map(({ href, title }) => (
        <HomePageContentSectionNavLink key={title} href={href}>
          {title}
        </HomePageContentSectionNavLink>
      ))}
    </HomePageContentSectionNavLinksContainer>
  </HomePageContentSectionNavWrapper>
);

export default HomePageContentSectionNav;
