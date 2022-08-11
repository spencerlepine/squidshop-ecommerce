import { render, screen } from '@testing-library/react';
import DataLoader from './index';

test('should render without without throwing an error', () => {
  render(<DataLoader />);
  expect(true).toBeTruthy();
});