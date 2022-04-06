import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    navbarHeight: number;

    colors: {
      dark: string;
      white: string;
      grey: string;
    };
  }
}
