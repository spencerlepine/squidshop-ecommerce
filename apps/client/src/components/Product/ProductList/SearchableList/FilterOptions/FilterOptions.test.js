import { render, screen } from '@testing-library/react';
import FilterOptions from './index';

test('should render without without throwing an error', () => {
  render(<FilterOptions />);
  expect(true).toBeTruthy();
});