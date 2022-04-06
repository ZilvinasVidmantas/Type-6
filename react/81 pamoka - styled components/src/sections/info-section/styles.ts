import styled from 'styled-components';

export const InfoSectionCardContainer = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;

  @media (min-width: ${theme.breakpoints.lg}){
    flex-direction: row;
    column-gap: 20px;
  }
`);

export const InfoSectionCard = styled.article(({ theme }) => `
  box-shadow: 0 2px 4px #0005;
  padding: 20px;
  
  @media (min-width: ${theme.breakpoints.lg}){
    flex-grow: 1;
  }
`);
