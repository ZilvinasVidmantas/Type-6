import '@mui/material';

declare module '@mui/material/styles/createPalette' {

  interface PaletteOptions {
    red?: PaletteColorOptions;
    black?: PaletteColorOptions;
    blue?: PaletteColorOptions;
    gray?: PaletteColorOptions;
  }

  interface Palette {
    red: PaletteColor;
    black: PaletteColor;
    blue: PaletteColor;
    gray: PaletteColor;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    red: true;
    black: true;
    blue: true;
    gray: true;
  }
}
