import { Container } from '@mui/system';
import OrdersView from '../../components/Orders/OrdersView';

// should render order page title
// should render each order place date TODO
// should render each order id TODO
// should render each order address TODO
// should render each order total TODO
// should render each order items with image, title, price TODO
const OrdersPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <OrdersView />
    </Container>
  );
}

export default OrdersPage;
