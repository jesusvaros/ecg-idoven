import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    main: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
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
      main: "#252323",
    },
    secondary: {
      main: "#3f51b5",
      light: "#6372c8",
    },
    warning: {
      main: "#f5e31a",
    },
    common: {
      white: "#fff",
    },
  },
};

export const styledTheme = createTheme(theme);
