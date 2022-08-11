import { render, screen } from '@testing-library/react';
import SearchableList from './index';

test('should render without without throwing an error', () => {
  render(<SearchableList />);
  expect(true).toBeTruthy();
});