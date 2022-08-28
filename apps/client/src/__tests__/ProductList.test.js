import { render, screen } from '@testing-library/react';
import ProductList from 'components/Product/Lists/ProductList'

test('should render without without throwing an error', () => {
  render(<ProductList />);
  expect(true).toBeTruthy();
});