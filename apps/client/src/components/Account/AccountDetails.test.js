import { render } from '@testing-library/react';
import AccountDetails from './AccountDetails';

test('should render without without throwing an error', () => {
  render(<AccountDetails />);
  expect(true).toBeTruthy();
});