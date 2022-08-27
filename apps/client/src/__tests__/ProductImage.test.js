import { render, screen } from '@testing-library/react';
import ProductImage from '../components/Product/PageView/ProductImage/index';

test('should render without without throwing an error', () => {
  render(<ProductImage />);
  expect(true).toBeTruthy();
});