import { createTheme, PaletteColor } from '@mui/material';

const defaultTheme = createTheme();

const createColor = (color: string): PaletteColor => defaultTheme.palette.augmentColor({ color: { main: color } });

const theme = createTheme({
  palette: {
    primary: createColor('#fc5e03'),
    secondary: createColor('#474747'),
  },
  shape: {
    borderRadius: 0,
  },
  mixins: {
    navbar: {
      height: 56,
    },
  },
});

export default theme;
