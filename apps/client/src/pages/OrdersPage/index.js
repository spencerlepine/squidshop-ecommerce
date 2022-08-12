import { Container } from '@mui/system';
import OrdersView from '../../components/Orders/OrdersView';

// should render order page title
// should render each order place date
// should render each order id
// should render each order address
// should render each order total
// should render each order items with image, title, price
const OrdersPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <OrdersView />
    </Container>
  );
}

export default OrdersPage;
