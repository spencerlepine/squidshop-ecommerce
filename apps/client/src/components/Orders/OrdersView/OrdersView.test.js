import { render, screen } from '@testing-library/react';
import OrdersView from './index';

test('should render without without throwing an error', () => {
  render(<OrdersView />);
  expect(true).toBeTruthy();
});