import { render, screen } from '@testing-library/react';
import OrdersView from 'components/Orders/OrdersView'

test('should render without without throwing an error', () => {
  render(<OrdersView />);
  expect(true).toBeTruthy();
});