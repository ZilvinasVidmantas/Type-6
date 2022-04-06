import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from './theme/global-css';
import theme from './theme';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
