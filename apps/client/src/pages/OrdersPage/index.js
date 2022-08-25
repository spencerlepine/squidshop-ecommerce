import OrdersView from '../../components/Orders/OrdersView';
import withAuthRedirect from '../../hooks/useAuthRedirect';
import CenteredElement from '../../layout/CenteredElement';

// should render order page title
// should render each order place date
// should render each order id
// should render each order address
// should render each order total
// should render each order items with image, title, price
const OrdersPage = () => {
  return (
    <CenteredElement maxWidth="md">
      <OrdersView />
    </CenteredElement>
  );
}

const redirectOptions = {
  shouldBeLoggedIn: true,
  // inaccessibleWhenLoggedIn: false,
};
export default withAuthRedirect(OrdersPage, redirectOptions);
