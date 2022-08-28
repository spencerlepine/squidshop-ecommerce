import * as React from 'react';
import useAuth from 'context/AuthContext';
import useDemoSettings from 'context/DemoSettingsContext';
import useCart from 'context/CartContext';
import useOrders from 'context/OrdersContext';
import CartService from 'api//cart';
import { useNavigate } from "react-router-dom";

const useHandleCartState = (Component: any) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { addDemoOrder } = useOrders(); // for demo purposes
  const { useDemoData } = useDemoSettings();
  const { cartItems, useDemoCart, handleCheckout, removeFromCart } = useCart();

  const checkoutAction = () => {
    if (useDemoData) {
      const demoOrder = {
        id: "21093857",
        orderAddress: "60 Wall Street, New York City, 10005",
        orderTotal: 183.09,
        purchaseDate: "2/17/22",
        cartItems: CartService.demoCart
      }
      if (handleCheckout && addDemoOrder) {
        handleCheckout('', { isDemoCart: true, addDemoOrder: () => addDemoOrder(demoOrder) })
        navigate('/orders');
      }
    }

    if ((currentUser && currentUser.id) && handleCheckout) {
      const id = (currentUser || {})['id']
      handleCheckout(id)
    }
  }

  const handleRemove = (cartProduct: any) => () => {
    if (useDemoData) {
      navigate('/cart');
      CartService.removeDemoProductFromCart(cartProduct.id)
    }
    if (removeFromCart) {
      return removeFromCart(cartProduct.cartItemId || cartProduct.id, (currentUser || {}).id, { isDemoCart: useDemoData })
    }
  }

  const refreshCart = (userId: string, useDemoData: any) => {
    if (useDemoData) {
      return () => new Promise((resolve) => {
        if (cartItems && cartItems.length === 0 && useDemoCart) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useDemoCart()
        }
        resolve(CartService.demoCart)
      })
    } else if (userId) {
      return () => CartService.fetchUserCart(userId).then((result: any) => {
        return result.cart
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
