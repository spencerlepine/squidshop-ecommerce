import { render, screen } from '@testing-library/react';
import CartItemCard from './index';

test('should render without without throwing an error', () => {
  render(<CartItemCard />);
  expect(true).toBeTruthy();
});