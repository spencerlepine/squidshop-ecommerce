import { render, screen } from '@testing-library/react';
import ProductCard from 'components/Product/ProductCard'

test('should render without without throwing an error', () => {
  render(<ProductCard />);
  expect(true).toBeTruthy();
});