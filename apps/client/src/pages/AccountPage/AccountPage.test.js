import { render, screen } from '@testing-library/react';
import AccountPage from './index';

const mockUser = {
  firstName: 'John',
  id: 'p2048570938475',
  email: 'johndeer@gmail.com',
}
const RenderOptions = { renderAsMockUser: true, mockUser }

describe('AccountPage', () => {
  test('should render without without throwing an error', () => {
    render(<AccountPage />);
    expect(true).toBeTruthy();
  });

  test('should render user first name', () => {
    render(<AccountPage />, RenderOptions);

    const nameElement = screen.getByText(new RegExp(`${mockUser.firstName}`, 'i'));
    expect(nameElement).toBeInTheDocument();
  });

  test('should render current user\'s email', () => {
    render(<AccountPage />, RenderOptions);

    const emailElement = screen.getByText(new RegExp(`${mockUser.email}`, 'i'));
    expect(emailElement).toBeInTheDocument();
  });

  // test('should render orders page link', () => {
  //   render(<AccountPage />);

  // });

  // test('should render cart page link', () => {
  //   render(<AccountPage />);

  // });
});
