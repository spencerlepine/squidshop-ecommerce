import { render, screen } from '@testing-library/react';
import Header from '.'

// should render squidshop logo
// should render squidshop name
// should render search bar
// should render departments link
// should render login button by default
// should render cart link when logged in
// should render account link
test('should render without without throwing an error', () => {
  render(<Header />);
  expect(true).toBeTruthy();
});