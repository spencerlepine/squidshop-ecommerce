import { render, screen } from '@testing-library/react';
import CartPage from './CartPage';

describe('CartPage', () => {
  test('should render without without throwing an error', () => {
    render(<CartPage />);
    expect(true).toBeTruthy();
  });
});
