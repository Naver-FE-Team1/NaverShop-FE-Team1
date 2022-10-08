import { createTheme } from "@mui/material";

export const ThemeConfig = createTheme({
  typography: {
    fontFamily: ["Satoshi", "Clash Display", "sans-serif"].join(","),
    palette: {
      black: {
        main: "#000000",
      },
    },
  },
});
