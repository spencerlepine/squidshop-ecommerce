import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from './index';

test('should render without throwing error', () => {
  render(<SignIn />);
  expect(true).toBeTruthy();
});
