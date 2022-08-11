import { render, screen } from '@testing-library/react';
import MobileEnabled from './index';

test('should render without without throwing an error', () => {
  render(<MobileEnabled />);
  expect(true).toBeTruthy();
});