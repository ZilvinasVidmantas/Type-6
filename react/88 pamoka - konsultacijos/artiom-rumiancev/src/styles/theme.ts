import { createTheme } from '@mui/material';

// const baseTheme = createTheme();

const avocadoTheme = createTheme({
  palette: {
    primary: {
      main: '#5f7a61',
      light: '#8da98e',
      dark: '#344e37',
      contrastText: '#ffffff',
    },
    brown: {
      main: '#A64B2A',
      light: '#D7A86E',
      dark: '#8E3200',
    },
    purple: {
      main: '#712B75',
      dark: '##5e2461',
      light: '##aa41b0',
    },
    orange: {
      main: '#E45826',
      light: '#fc6935',
      dark: '#94300d',
    },

    background: {
      paper: '#8da98e',
      default: '#f7e5cd',
    },
  },
  mixins: {
    section: {
      height: 100,
      width: 200,
      background: '#8da98e',
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
  },
});

export const avocadoSameHeightNavbar = createTheme(avocadoTheme, {
  mixins: {
    // toolbar: {
    //   minHeight: 56,
    //   '@media (min-width: 0) and (orientation: landscape)': {
    //     minHeight: 56,
    //   },
    //   [avocadoTheme.breakpoints.up('sm')]: {
    //     minHeight: 56,
    //   },
    // },
    section: {
      height: 200,
      width: 200,
      background: '#8da98e',
    },
  },
});

console.log(avocadoSameHeightNavbar);

export default avocadoTheme;

