import styled from 'styled-components';

export const NavbarWrapper = styled.div(({ theme }) => `
  position: sticky;
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

export const NavbarNav = styled.div`
  display: flex;
  gap: 5px;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const NavbarNavLink = styled.a(({ theme }) => `
  display: block;
  height: 100%;
  padding: 10px;
  color: ${theme.colors.white};
  text-decoration: none;

  :hover {
    color: ${theme.colors.whiteHover};
    background: ${theme.colors.darkHover};
  }
`);
