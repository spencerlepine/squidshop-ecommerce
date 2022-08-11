import { render, screen } from '@testing-library/react';
import ProductCard from './index';

test('should render without without throwing an error', () => {
  render(<ProductCard />);
  expect(true).toBeTruthy();
});