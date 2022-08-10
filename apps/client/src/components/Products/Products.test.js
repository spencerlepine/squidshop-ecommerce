import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Products from './index';

test('should render without throwing error', () => {
  render(<Products />);
  expect(true).toBeTruthy();
});
