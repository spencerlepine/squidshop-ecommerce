import { render, screen } from '@testing-library/react';
import AccountDetails from './index';

test('should render without without throwing an error', () => {
  render(<AccountDetails />);
  expect(true).toBeTruthy();
});