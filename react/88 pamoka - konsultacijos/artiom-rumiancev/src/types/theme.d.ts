import '@mui/material';
import { CSSProperties } from '@mui/material/node_modules/@mui/system/node_modules/@mui/styled-engine';

declare module '@mui/material/styles/createMixins' {
  // Perrasom Mixins tipa ir papildomai sukuriam section (tokiu pat principu, kaip toolbar. Eidami per temos aprasus galime pamatyt, kaip apibreztas toolbar)
  interface Mixins {
    section: CSSProperties
  }

  // apatine dalis nera privaloma, nes ThemeOptions'ai jau apibudinti kaip neprivalomi (I think..?)

  // duoda galimybe perduoti option'us
  // interface ThemeOptions {
  //   section?: CSSProperties
  // }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    brown?: PaletteColorOptions;
    purple?: PaletteColorOptions;
    orange?: PaletteColorOptions;
  }

  interface Palette {
    brown: PaletteColor;
    purple: PaletteColor;
    orange: PaletteColor;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    brown: true;
    purple: true;
    orange: true;
  }
}
