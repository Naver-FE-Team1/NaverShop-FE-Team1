import { CssBaseline, ThemeProvider } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./scss/index.scss";
import store from "./store";
import { ThemeConfig } from "./theme/ThemeConfig";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <BrowserRouter>
            <App />
            <ToastContainer></ToastContainer>
          </BrowserRouter>
        </LocalizationProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
