import { render, screen } from '@testing-library/react';
import ImageCarousel from './index';

test('should render without without throwing an error', () => {
  render(<ImageCarousel />);
  expect(true).toBeTruthy();
});