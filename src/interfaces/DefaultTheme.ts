import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      readonly primaryColor: string;
      readonly secondaryColor: string;
      readonly goldenColor: string;
      readonly goldenColorHover: string;
      readonly lightColor: string;
    };
  }
}
