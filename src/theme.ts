import { createTheme, responsiveFontSizes } from "@mui/material";




// Extendendo o tema para incluir `custom`
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      gradientBackground: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      gradientBackground?: string;
    };
  }
}



let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
  },
  typography: {
    fontFamily: ['"Helvetica Neue", "Arial"'].join(","),
  },
  custom: {
    gradientBackground: "linear-gradient(45deg, purple 5%, blue 45%, #ee82ee)",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
