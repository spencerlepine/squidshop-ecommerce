import { render } from '@testing-library/react';
import AccountPage from './index';

const mockUser = {
  firstName: 'John',
  id: 'p2048570938475',
  email: 'johndeer@gmail.com',
}
// TODO
describe('AccountPage', () => {
  test('should render without without throwing an error', () => {
    render(<AccountPage />);
    expect(true).toBeTruthy();
  });

  test('should render user first name', () => {
    render(<AccountPage />, { renderAsMockUser, mockUser });

  });

  test('should render current users email', () => {
    render(<AccountPage />, { renderAsMockUser, mockUser });

  });

  test('should render orders page link', () => {
    render(<AccountPage />);

  });

  test('should render cart page link', () => {
    render(<AccountPage />);

  });
});
