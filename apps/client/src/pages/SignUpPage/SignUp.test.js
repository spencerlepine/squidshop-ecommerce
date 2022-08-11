import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUp from './index';

test('should render without throwing error', () => {
  render(<SignUp />);
  expect(true).toBeTruthy();
});
