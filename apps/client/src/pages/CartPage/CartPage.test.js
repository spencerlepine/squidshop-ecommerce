import { render, screen } from '@testing-library/react';
import CartPage from './index';

describe('CartPage', () => {
  test('should render without without throwing an error', () => {
    render(<CartPage />);
    expect(true).toBeTruthy();
  });

  test('should render cart page title', () => {
    render(<CartPage />)
    const titleElement = screen.getByText(/Cart/);
    expect(titleElement).toBeInTheDocument();
  });
});
