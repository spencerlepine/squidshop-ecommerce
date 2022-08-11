import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as cartApi from '../api/cart';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  function addItemToCart(productId, userId) {
    setLoading(true);
    cartApi.addProductToCart(productId, userId)
      .then((cart) => setCartItems(cart))
      .catch(() => { })
      .then(() => setLoading(false))
  }

  function loadUserCart(userId) {
    setLoading(true);
    cartApi.fetchUserCart(userId)
      .then((cart) => setCartItems(cart))
      .catch(() => setCartItems([]))
      .then(() => setLoading(false))
  }

  const value = {
    loading,
    cartItems,
    loadUserCart,
    addItemToCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export default useCart;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};