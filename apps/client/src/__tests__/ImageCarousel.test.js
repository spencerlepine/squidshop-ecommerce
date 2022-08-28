import { render } from '@testing-library/react';
import ImageCarousel from 'components/Catalog/ImageCarousel'

test('should render without without throwing an error', () => {
  render(<ImageCarousel />);
  expect(true).toBeTruthy();
});