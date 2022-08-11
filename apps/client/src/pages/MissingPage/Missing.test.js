import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Missing from './index';

test('should render without throwing error', () => {
  render(<Missing />);
  expect(true).toBeTruthy();
});
