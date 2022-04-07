import styled from 'styled-components';

const Container = styled.div(({ theme }) => `
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 540px;
    margin: auto;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 720px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 960px;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    width: 1140px;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    width: 1320px;
  }
`);

export default Container;
