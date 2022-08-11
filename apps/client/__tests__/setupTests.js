import React from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../src/context/AuthContext';
import { DemoSettingsContext } from '../src/context/DemoSettingsContext';
import { CartContext } from '../src/context/CartContext';
import { createBrowserHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const history = createBrowserHistory();

const AllTheProviders = ({ children }) => (
  <DemoSettingsContext.Provider value={{}}>
    <AuthContext.Provider value={{}}>
      <CartContext.Provider value={{}}>
        <MemoryRouter history={history}>
          {children}
        </MemoryRouter>
      </CartContext.Provider>
    </AuthContext.Provider>
  </DemoSettingsContext.Provider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

// const customRender = (ui, options) =>
//   render(ui, { wrapper: AllTheProviders, ...options });

// override render method
jest.mock('@testing-library/react', () => {
  const originalModule = jest.requireActual('@testing-library/react');

  const customRender = (ui, options) => (
    originalModule.render(ui, { wrapper: AllTheProviders, ...options })
  )

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => ({})),
    render: customRender
  }
})
