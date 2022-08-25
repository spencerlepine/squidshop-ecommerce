import CenteredElement from '../../components/CenteredElement';
import useDataLoadHandler from '../../hooks/useDataLoadHandler';
import CartView from '../../components/Cart/CartView';
import withAuthRedirect from '../../hooks/useAuthRedirect';
import useHandleCartState from '../../hooks/useHandleCartState';

const CartPage = () => {
  const CartState = useHandleCartState(CartView);
  const CartDataLoader = useDataLoadHandler(CartState.Component, CartState.fetchFunction, CartState.options)

  return (
    <CenteredElement maxWidth="md">
      <CartDataLoader />
    </CenteredElement>
  );
}

const redirectOptions = {
  shouldBeLoggedIn: true,
  // inaccessibleWhenLoggedIn: false,
};
export default withAuthRedirect(CartPage, redirectOptions);
