import { createTheme } from '@mui/material';

const theme = createTheme();

const createColor = (color: string) => theme.palette.augmentColor({ color: {main: color } });

const lightTheme = createTheme(theme, {
  palette: {
    primary: {
      main: "#03a9f4",
      light: "#35baf6",
      dark: "#e04800",
      contrastText: "#ff1744",
    },
    background: {
      default: "#d1ff33",
    },
  },

  mixins: {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 56,
    },
    section: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
});

export default theme;
