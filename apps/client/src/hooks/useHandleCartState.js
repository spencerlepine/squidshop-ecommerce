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

  if (useDemoData) {
    return () => <Component data={cartItems} handleCheckout={checkoutAction} handleRemove={handleRemove} />
  }

  const refreshCart = (userId, useDemoData) => {
    if (useDemoData) {
      if (cartItems && cartItems.length === 0) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useDemoCart()
      }
    } else if (userId) {
      return () => new Promise(() => loadUserCart(id))
    }

    return () => new Promise((resolve) => resolve([]))
  }

  return {
    Component: () => <Component data={cartItems} handleCheckout={checkoutAction} handleRemove={handleRemove} />,
    fetchFunction: refreshCart((currentUser || {})['id'], useDemoData),
    options: { handleCheckout, handleRemove }
  }
}

export default useHandleCartState;
