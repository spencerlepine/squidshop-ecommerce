import { render, screen } from '@testing-library/react';
import PageView from './index';

test('should render without without throwing an error', () => {
  render(<PageView />);
  expect(true).toBeTruthy();
});