import CenteredElement from '../../components/CenteredElement';
import CartView from '../../components/Cart/CartView';
import withAuthRedirect from '../../hooks/useAuthRedirect';

const CartPage = () => {
  return (
    <CenteredElement maxWidth="md">
      <CartView />
    </CenteredElement>
  );
}

const redirectOptions = {
  shouldBeLoggedIn: true,
  // inaccessibleWhenLoggedIn: false,
};
export default withAuthRedirect(CartPage, redirectOptions);
