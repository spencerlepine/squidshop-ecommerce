import { Container } from '@mui/system';
import CartView from '../../components/Cart/CartView';
import withAuthRedirect from '../../hooks/useAuthRedirect';

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

const redirectOptions = {
  shouldBeLoggedIn: true,
  // inaccessibleWhenLoggedIn: false,
};
export default withAuthRedirect(CartPage, redirectOptions);
