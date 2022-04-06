import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    navbarHeight: number;

    colors: {
      dark: string;
      darkHover: string;
      white: string;
      whiteHover: string;
      grey: string;
    };
  }
}
