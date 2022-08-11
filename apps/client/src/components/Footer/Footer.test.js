import { render, screen } from '@testing-library/react';
import Footer from './index';

test('should render without without throwing an error', () => {
  render(<Footer />);
  expect(true).toBeTruthy();
});