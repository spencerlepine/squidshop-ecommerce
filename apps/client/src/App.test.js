import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app name', () => {
  render(<App />);
  const titleElement = screen.getByText(/SquidShop/i);
  expect(titleElement).toBeInTheDocument();
});
