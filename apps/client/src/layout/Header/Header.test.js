import { render, screen } from '@testing-library/react';
import Header from './index';

test('should render without without throwing an error', () => {
  render(<Header />);
  expect(true).toBeTruthy();
});