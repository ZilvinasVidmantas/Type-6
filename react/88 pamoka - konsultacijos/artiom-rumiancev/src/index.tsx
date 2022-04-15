import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './app';
import avocadoTheme, { avocadoSameHeightNavbar } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={avocadoTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
