import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <PortfolioProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </PortfolioProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)


