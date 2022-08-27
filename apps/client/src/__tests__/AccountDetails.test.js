import { render } from '@testing-library/react';
import AccountDetails from '@components/Account/AccountDetails';

test('should render without without throwing an error', () => {
  render(<AccountDetails />);
  expect(true).toBeTruthy();
});