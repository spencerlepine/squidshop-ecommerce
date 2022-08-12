import { Container } from '@mui/system';
import CartView from '../../components/Cart/CartView';

// should render cart page title
// should render cart total
// should render cart checkout button
// should render product cart with image, title, price, and quantity
// should render all products in cart details
const CartPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <CartView />
    </Container>
  );
}

export default CartPage;
