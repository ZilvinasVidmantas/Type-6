import { createTheme } from '@mui/material';

const theme = createTheme();

const createColor = (color: string) => theme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme(theme, {
  palette: {
    red: createColor('#dd2222'),
    green: createColor('#22dd22'),
    blue: createColor('#2222dd'),
    primary: createColor('#fc5203'),

    background: {
      default: '#fafafa',
    },
  },

  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
    },
    section: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
});

export default lightTheme;
