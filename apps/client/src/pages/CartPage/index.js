import { Container } from '@mui/system';
import CartView from '../../components/Cart/CartView';

// should render cart page title TODO
// should render cart total TODO
// should render cart checkout button TODO
// should render product cart with image, title, price, and quantity TODO
// should render all products in cart details TODO
const CartPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <CartView />
    </Container>
  );
}

export default CartPage;
