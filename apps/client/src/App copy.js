import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import DepartmentPage from './pages/DepartmentPage';
import ProductPage from './pages/ProductPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Missing from './components/Missing';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          marginTop: '4em',
        }}
      >
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/department/:departmentId" element={<DepartmentPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
