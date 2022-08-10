import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app name', () => {
  render(<App />);
  const titleElement = screen.getByText(/SquidShop/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the landing page', () => {
  render(<App />);
  
  expect(screen.getAllByRole("heading")[0]).toHaveTextContent(/SquidShop/);
});