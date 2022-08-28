import { render } from '@testing-library/react';
import SignUp from 'pages/SignUpPage';

test('should render without throwing error', () => {
  render(<SignUp />);
  expect(true).toBeTruthy();
});
