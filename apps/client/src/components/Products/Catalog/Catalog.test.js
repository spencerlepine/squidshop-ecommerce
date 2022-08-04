import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Catalog from './index';

test('should render without throwing error', () => {
  render(<Catalog />, { wrapper: MemoryRouter });
  expect(true).toBeTruthy();
});
