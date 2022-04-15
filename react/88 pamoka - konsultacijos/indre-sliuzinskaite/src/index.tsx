import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider,
  CssBaseline,
} from '@mui/material';

import lightTheme from './styles/theme';
import App from './app';
import namas from "./namas.jpg";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
