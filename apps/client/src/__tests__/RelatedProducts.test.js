import { render, screen } from '@testing-library/react';
import RelatedProducts from 'components/Product/Lists/RelatedProducts'

test('should render without without throwing an error', () => {
  render(<RelatedProducts />);
  expect(true).toBeTruthy();
});