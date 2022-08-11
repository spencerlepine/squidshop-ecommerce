import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { DemoSettingsProvider } from './context/DemoSettingsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DemoSettingsProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DemoSettingsProvider>
    </Router>
  </React.StrictMode>
);
