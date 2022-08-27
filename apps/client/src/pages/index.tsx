import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import DepartmentPage from './DepartmentPage';
import ProductPage from './ProductPage';
import AccountPage from './AccountPage';
import CartPage from './CartPage';
import OrdersPage from './OrdersPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import MissingPage from './MissingPage';
import {
  Routes,
  Route,
} from "react-router-dom";

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<SignInPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/department/:departmentId" element={<DepartmentPage />} />
    <Route path="/product/:productId" element={<ProductPage />} />
    <Route path="/account" element={<AccountPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/orders" element={<OrdersPage />} />
    <Route path="*" element={<MissingPage />} />
  </Routes>
);

export default PageRoutes;
