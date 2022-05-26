import { createTheme } from '@mui/material';

const theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    background: {
      default: '#f6f6f6',
    },
    primary: {
      main: '#252525',
      dark: '#151515',
      light: '#353535',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#ff6f00',
      light: '#ff8221',
      dark: '#e36300',
      contrastText: '#fafafa',
    },
  },
  mixins: {
    drawer: {
      width: 240,
    },
  },
  typography: {
    fontFamily: '\'Lato\', sans-serif',
  },
});

export default theme;
