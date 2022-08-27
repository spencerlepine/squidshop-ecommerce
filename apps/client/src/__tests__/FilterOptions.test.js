import { render, screen } from '@testing-library/react';
import FilterOptions from 'components/Product/ProductList/SearchableList/FilterOptions'

test('should render without without throwing an error', () => {
  render(<FilterOptions />);
  expect(true).toBeTruthy();
});