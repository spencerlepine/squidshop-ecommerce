
import * as PropTypes from 'prop-types';
import { AuthContext } from 'context/AuthContext';
import { OrdersContext } from 'context/OrdersContext';
import { DemoSettingsContext } from 'context/DemoSettingsContext';
import { CartContext } from 'context/CartContext';
import { createBrowserHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const history = createBrowserHistory();

const AllTheProviders = (options) => ({ children }) => {
  const { renderAsMockUser, mockUser } = options || {};
  const renderLoggedIn = renderAsMockUser && mockUser;
  const loginState = renderLoggedIn ? {
    currentUser: mockUser,
    isLoggedIn: true
  } : {}

  return (
    <DemoSettingsContext.Provider value={{}}>
      <AuthContext.Provider value={loginState}>
        <OrdersContext.Provider value={{}}>
          <CartContext.Provider value={{}}>
            <MemoryRouter history={history}>
              {children}
            </MemoryRouter>
          </CartContext.Provider>
        </OrdersContext.Provider>
      </AuthContext.Provider>
    </DemoSettingsContext.Provider>
  )
};

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

// override render method
jest.mock('@testing-library/react', () => {
  const originalModule = jest.requireActual('@testing-library/react');

  const customRender = (ui, options) => (
    originalModule.render(ui, { wrapper: AllTheProviders(options), ...options })
  )

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => ({})),
    render: customRender
  }
});

// jest.mock('axios', () => {
//   return {
//     get: () => new Promise((resolve) => resolve()),
//     post: () => new Promise((resolve) => resolve()),
//     delete: () => new Promise((resolve) => resolve()),
//     put: () => new Promise((resolve) => resolve())
//   }
// })