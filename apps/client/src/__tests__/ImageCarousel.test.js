import { render, screen } from '@testing-library/react';
import ImageCarousel from '@components/BannerSlide/ImageCarousel'

test('should render without without throwing an error', () => {
  render(<ImageCarousel />);
  expect(true).toBeTruthy();
});