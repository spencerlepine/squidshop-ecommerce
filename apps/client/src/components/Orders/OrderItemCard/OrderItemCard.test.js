import { render, screen } from '@testing-library/react';
import OrderItemCard from './index';

test('should render without without throwing an error', () => {
  render(<OrderItemCard />);
  expect(true).toBeTruthy();
});