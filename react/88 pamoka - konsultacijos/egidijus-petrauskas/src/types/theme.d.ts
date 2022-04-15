import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    homePageColor: PaletteColor;
    profilePageColor: PaletteColor;
    aboutPageColor: PaletteColor;
  }

  interface PaletteOptions {
    homePageColor?: PaletteColorOptions;
    aboutPageColor?: PaletteColorOptions;
    profilePageColor?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    homePageColor: true;
    profilePageColor: true;
    aboutPageColor: true;
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    section: CSSProperties
  }
}
