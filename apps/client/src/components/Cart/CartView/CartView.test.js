import { render, screen } from '@testing-library/react';
import CartView from './index';

test('should render without without throwing an error', () => {
  render(<CartView />);
  expect(true).toBeTruthy();
});