import '@mui/material/styles';

// declare module '@mui/material/styles' {
//   interface Theme {
//     testas: number
//   }
// }

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    navbar: CSSProperties;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    manoSpalva?: PaletteColorOptions;
  }

  interface Palette {
    manoSpalva: PaletteColor;
  }
}
