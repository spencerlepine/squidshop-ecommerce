import { render, screen } from '@testing-library/react';
import SearchableList from 'components/Product/Lists/SearchableList/SearchableList'

test('should render without without throwing an error', () => {
  render(<SearchableList />);
  expect(true).toBeTruthy();
});