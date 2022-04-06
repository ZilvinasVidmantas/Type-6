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

    breakpoints: {
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string,
    }
  }
}
