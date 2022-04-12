import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';

import theme from './styles/theme';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
