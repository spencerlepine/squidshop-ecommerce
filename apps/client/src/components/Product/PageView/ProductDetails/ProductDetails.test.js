import { render, screen } from '@testing-library/react';
import ProductDetails from './index';

test('should render without without throwing an error', () => {
  render(<ProductDetails />);
  expect(true).toBeTruthy();
});