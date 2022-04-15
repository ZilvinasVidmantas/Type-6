import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import MyThemeCustomFully from './Styles/custom-themes/theme-custom-fully';

// import myThemeCustomColors from './Styles/custom-themes/theme-custom-colors';

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={MyThemeCustomFully}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
