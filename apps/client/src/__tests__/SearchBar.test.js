import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar/index';

test('should render without without throwing an error', () => {
  render(<SearchBar />);
  expect(true).toBeTruthy();
});