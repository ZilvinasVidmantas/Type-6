import styled from 'styled-components';

export const HomePageContentSectionContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const HomePageContentSectionNavWrapper = styled.div`
  width: 800px;
`;

export const HomePageContentSectionNavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePageContentSectionNavLink = styled.a(({ theme }) => `
  padding: 20px;
  background-color: ${theme.colors.grey};
  text-decoration: none;
  color: ${theme.colors.dark};
`);
