import { render, screen } from '@testing-library/react';
import CatalogView from '../components/CatalogView/index';

test('should render without without throwing an error', () => {
  render(<CatalogView />);
  expect(true).toBeTruthy();
});