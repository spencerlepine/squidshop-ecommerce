import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('should render without throwing error', () => {
  render(<Home />);
  expect(true).toBeTruthy();
});
