import styled from 'styled-components';

export const ContentSectionContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const ContentSectionNavWrapper = styled.div`
  width: 800px;
`;

export const ContentSectionNavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentSectionNavLink = styled.a(({ theme }) => `
  padding: 20px;
  background-color: ${theme.colors.grey};
  text-decoration: none;
  color: ${theme.colors.dark};
`);
