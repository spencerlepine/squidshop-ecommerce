import { render } from '@testing-library/react';
import SingleRowList from './index';

test('should render without without throwing an error', () => {
  render(<SingleRowList />);
  expect(true).toBeTruthy();
});