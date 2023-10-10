import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './utils/theme/index.js';
import LoginProvider from './ContextApi/Auth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <App />
        </Router>
      </ThemeProvider>
    </LoginProvider>
  </React.StrictMode>,
)
