
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { OrdersProvider } from './context/OrdersContext';
import { DemoSettingsProvider } from './context/DemoSettingsContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLInputElement);
root.render(
  <React.StrictMode>
    <Router>
      <DemoSettingsProvider>
        <AuthProvider>
          <OrdersProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </OrdersProvider>
        </AuthProvider>
      </DemoSettingsProvider>
    </Router>
  </React.StrictMode>
);
