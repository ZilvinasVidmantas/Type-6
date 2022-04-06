import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  *, :after, :before {
    box-sizing: border-box;
  }
`;
