import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fc5203',
      light: '#ff6f2b',
      dark: '#e04800',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
    },
  },
});

const lightTheme = createTheme(theme, {
  mixins: {
    toolbar: {
      minHeight: 56,
      [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 56,
      },
      [theme.breakpoints.up('sm')]: {
        minHeight: 56,
      },
    },
  },
});

console.log(lightTheme);

export default lightTheme;
