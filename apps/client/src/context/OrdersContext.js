import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as ordersApi from '../api/orders';

export const OrdersContext = React.createContext();

export const OrdersProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  function loadUserOrders(userId) {
    setLoading(true);
    ordersApi.fetchUserOrders(userId)
      .then((orders) => setOrderItems(orders))
      .catch(() => setOrderItems([]))
      .then(() => setLoading(false))
  }

  const value = {
    loading,
    orderItems,
    loadUserOrders,
  };

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

const useOrders = () => useContext(OrdersContext);

export default useOrders;

OrdersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};