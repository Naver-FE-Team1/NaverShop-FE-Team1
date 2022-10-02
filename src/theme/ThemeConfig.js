import { createTheme } from "@mui/material";

export const ThemeConfig = createTheme({
  palette: {
    black: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: ["Satoshi", '"Clash Display"', "sans-serif"].join(","),
  },
});
