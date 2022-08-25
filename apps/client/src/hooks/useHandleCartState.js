import React from 'react';
import useAuth from '../context/AuthContext';
import useDemoSettings from '../context/DemoSettingsContext';
import useCart from '../context/CartContext';
import useOrders from '../context/OrdersContext';

const useHandleCartState = (Component) => {
  const { currentUser } = useAuth();
  const { addDemoOrder } = useOrders(); // for demo purposes
  const { useDemoData } = useDemoSettings();
  const { cartItems, loadUserCart, useDemoCart, handleCheckout, removeFromCart } = useCart();

  const checkoutAction = () => {
    if (useDemoData) {
      handleCheckout('', { isDemoCart: true, addDemoOrder: addDemoOrder })
    }

    if ((currentUser && currentUser.id)) {
      const id = (currentUser || {})['id']
      handleCheckout(id)
    }
  }

  const handleRemove = (cartProduct) => () => (
    removeFromCart(cartProduct.cartItemId || cartProduct.id, (currentUser || {}).id, { isDemoCart: useDemoData })
  )

  const refreshCart = (userId, useDemoData) => {
    if (useDemoData) {
      return new Promise((resolve) => {
        if (cartItems && cartItems.length === 0) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useDemoCart()
        }
        resolve([])
      })
    } else if (userId) {
      return () => new Promise(() => loadUserCart(id))
    }

    return () => new Promise((resolve) => resolve([]))
  }

  if (useDemoData) {
    return {
      Component: Component,
      fetchFunction: () => refreshCart('', useDemoData),
      options: { handleCheckout: checkoutAction, handleRemove, data: cartItems }
    }
  }

  return {
    Component: Component,
    fetchFunction: () => refreshCart((currentUser || {})['id'], useDemoData),
    options: { handleCheckout: checkoutAction, handleRemove, data: cartItems }
  }
}

export default useHandleCartState;
