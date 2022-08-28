import { render, screen } from '@testing-library/react';
import ProductImage from 'components/Product/ProductImage'

test('should render without without throwing an error', () => {
  render(<ProductImage />);
  expect(true).toBeTruthy();
});