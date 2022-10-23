import { CssBaseline, ThemeProvider } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { AuthProvider } from "./contexts/auth-context";
import "./scss/index.scss";
import store from "./store";
import { ThemeConfig } from "./theme/ThemeConfig";
<<<<<<< HEAD
import {Toastify} from './config/Toastify';
=======
import "react-toastify/dist/ReactToastify.css";
>>>>>>> 827b3f4 (completed checked passive function)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
<<<<<<< HEAD
          <AuthProvider>
            <BrowserRouter>
            <Toastify />
              <App />
            </BrowserRouter>
          </AuthProvider>
=======
          <BrowserRouter>
            <App />
            <ToastContainer></ToastContainer>
          </BrowserRouter>
>>>>>>> 827b3f4 (completed checked passive function)
        </LocalizationProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

