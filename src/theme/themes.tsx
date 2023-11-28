import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    main: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
  }

  export interface Theme {
    palette: Palette;
    common: { white: string };
  }
}

export const theme = {
  palette: {
    primary: {
      main: "#01161e",
    },
    secondary: {
      main: "#364492",
      light: "#6372c8",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    common: {
      white: "#fff",
    },
  },
};

export const styledTheme = createTheme(theme);