import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders app name', () => {
  render(<App />, { wrapper: MemoryRouter });
  const titleElement = screen.getByText(/SquidShop/i);
  expect(titleElement).toBeInTheDocument();
});
