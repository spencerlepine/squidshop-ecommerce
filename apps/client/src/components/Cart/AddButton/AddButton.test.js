import { render, screen } from '@testing-library/react';
import AddButton from './index';

test('should render without without throwing an error', () => {
  render(<AddButton />);
  expect(true).toBeTruthy();
});