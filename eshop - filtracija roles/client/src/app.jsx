import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import store from './store';
import Router from './routing/router';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    </CssBaseline>
  </ThemeProvider>
);

export default App;
