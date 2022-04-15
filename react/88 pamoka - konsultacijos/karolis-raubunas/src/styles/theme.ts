import { createTheme, PaletteColor } from '@mui/material';

const theme = createTheme();

const createColor = (color: string): PaletteColor => theme.palette.augmentColor({color: {main: color}});

const customTheme = createTheme(theme, {
  palette: {
    white: createColor('#F9F7F7'),
    lightBlue: createColor('#DBE2EF'),
    blue: createColor('#3F72AF'),
    darkBlue: createColor('#112D4E'),

    yellow: createColor('#FBFF00'),
    green: createColor('#42FF00'),
    red: createColor('#FF0000'),

    background: {
      default: '#F9F7F7',
    },
  },

  typography: {
    fontFamily: 'Montserrat',
  },

  mixins: {
    section: {
      display: 'flex',
      justifyContent: 'center',
      gap: 4,
    },

    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      mt: 7,
      mb: 10,
      border: 1,
      borderRadius: '5px',
      width: 400,
      padding: '15px',
    },
  },
});

export default customTheme;
