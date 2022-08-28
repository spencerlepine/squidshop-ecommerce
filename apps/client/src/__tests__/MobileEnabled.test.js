import { render } from '@testing-library/react';
import MobileEnabled from 'components/Catalog/MobileSearchBar';

test('should render without without throwing an error', () => {
  render(<MobileEnabled />);
  expect(true).toBeTruthy();
});