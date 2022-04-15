import { createTheme, Theme } from '@mui/material';

const theme: Theme = createTheme({
  palette: {
    secondary: {
      main: 'hsl(177deg 24% 37%)',
      light: '#619391',
      dark: '#1d5452',
    },

    homePageColor: {
      main: '#068693',
    },

    aboutPageColor: {
      main: '#496e4b',
    },

    profilePageColor: {
      main: '#1571bb',
    },

    background: {
      default: '#A7C4BC',
    },
  },

  mixins: {
    section: {
      maxWidth: 340,
      textAlign: 'center',
      padding: 10,
      margin: 10,
      fontSize: 20,
      color: '#0b4a47',
      border: '1px dashed black',
      borderRadius: 10,
    },
  },
});

export default theme;
