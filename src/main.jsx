import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/index.scss";
import { ThemeConfig } from "./theme/ThemeConfig";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
