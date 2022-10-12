import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/index.scss'
import { ThemeConfig } from './theme/ThemeConfig'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from "react-redux";
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
