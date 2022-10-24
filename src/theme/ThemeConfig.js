/**
 * Configuration for MUI theme
 * file: ThemeConfig.js
 */

import { createTheme } from "@mui/material";

export const ThemeConfig = createTheme({
  typography: {
    fontFamily: ["Satoshi", "Clash Display", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#2a254b",
    },
  },
});
