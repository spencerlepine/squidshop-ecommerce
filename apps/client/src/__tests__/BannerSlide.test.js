import { render, screen } from '@testing-library/react';
import BannerSlide from 'components/BannerSlide'

test('should render without without throwing an error', () => {
  render(<BannerSlide />);
  expect(true).toBeTruthy();
});