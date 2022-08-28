import { render } from '@testing-library/react';
import Footer from 'layout/Footer';

test('should render without without throwing an error', () => {
  render(<Footer />);
  expect(true).toBeTruthy();
});