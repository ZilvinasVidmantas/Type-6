import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fc5203',
      light: '#ff6f2b',
      dark: '#e04800',
      contrastText: '#ffffff',
    },

    manoSpalva: {
      main: '#546548',
    },
    background: {
      default: '#fafafa',
    },
  },
});

const lightTheme = createTheme(theme, {
  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
    },
  },
});

console.log(lightTheme);

export default lightTheme;
