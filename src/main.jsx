import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeConfig } from './theme/ThemeConfig'
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeConfig}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
