import styled from 'styled-components';

export const NavbarWrapper = styled.div(({ theme }) => `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  height: ${theme.navbarHeight}px;
`);

export const NavbarLogo = styled.img`
  display: block;
  height: 60px;
  padding: 10px;
`;

export const NavbarNav = styled.div(({ theme }) => `
  display: flex;
  gap: 5px;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${theme.colors.dark};
`);

export const NavbarNavLink = styled.a(({ theme }) => `
  display: block;
  height: 100%;
  padding: 10px;
  color: ${theme.colors.white};
  text-decoration: none;
`);
