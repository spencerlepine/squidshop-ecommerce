import React from 'react';
import useAuth from '../context/AuthContext';
import useDemoSettings from '../context/DemoSettingsContext';
import useCart from '../context/CartContext';
import useOrders from '../context/OrdersContext';
import CartService from '../api/cart';

const useHandleCartState = (Component) => {
  const { currentUser } = useAuth();
  const { addDemoOrder } = useOrders(); // for demo purposes
  const { useDemoData } = useDemoSettings();
  const { cartItems, useDemoCart, handleCheckout, removeFromCart } = useCart();

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
      return () => new Promise((resolve) => {
        if (cartItems && cartItems.length === 0) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useDemoCart()
        }
        resolve([])
      })
    } else if (userId) {
      return () => CartService.fetchUserCart(userId).then(({ cart }) => {
        return cart
      })
    }

    return () => new Promise((resolve) => resolve([]))
  }
  const demoFetch = refreshCart('', useDemoData);
  const regularFetch = refreshCart((currentUser || {})['id'], false)

  return {
    Component: Component,
    fetchFunction: useDemoData ? demoFetch : regularFetch,
    options: { handleCheckout: checkoutAction, handleRemove }
  }
}

export default useHandleCartState;
