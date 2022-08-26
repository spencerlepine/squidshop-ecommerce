import { render, screen } from '@testing-library/react';
import CartPage from './index';

describe('CartPage', () => {
  test('should render without without throwing an error', () => {
    render(<CartPage />);
    expect(true).toBeTruthy();
  });
});
