import { render, screen } from '@testing-library/react';
import CatalogView from './index';

test('should render without without throwing an error', () => {
  render(<CatalogView />);
  expect(true).toBeTruthy();
});