import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CartService from '../api/cart';

export const CartContext = React.createContext();

const demoCart = [
  {
    "cartItemId": "1023984",
    "productId": "2310105834087",
    "title": "Zaz Kangeroo Hoodie",
    "description": "This is a variable product called a Chaz Kangeroo Hoodie",
    "image": "http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg",
    "category": "hoodies",
    "price": 84.86,
    "rating_rate": 0,
    "rating_count": 0
  },
  {
    "cartItemId": "102984",
    "productId": "2310105834087",
    "title": "Teton Pullover Hoodie-L-Red",
    "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "image": "http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg",
    "category": "tees",
    "price": 98.23,
    "rating_rate": 0,
    "rating_count": 0
  },
];


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const useDemoCart = () => {
    if (cartItems.length !== 0) {
      setCartItems([]) // setCartItems(demoCart)
      setLoading(false)
    }
    return []
  }

  const removeFromCart = (cartItemId, userId, options) => {
    if (options && options.isDemoCart) {
      setCartItems((prevList) => (prevList.filter((p) => (
        p.id !== cartItemId
      ))))
      return
    }

    setLoading(true);
    CartService.removeProductFromCart(cartItemId, userId)
      .then(({ cart }) => setCartItems(cart))
      .catch(() => { })
      .then(() => setLoading(false))
  }

  const addItemToCart = (product, userId, options) => {
    if (loading === false) {
      setLoading(true)

      if (options && options.isDemoCart && options.product) {
        setCartItems((prevList) => ([...prevList, {
          ...options.product,
          id: `${(Math.random() + 1).toString(36).substring(7)}`,
          productId: options.product.id
        }]))
        setLoading(false)
        return
      }

      return CartService.addProductToCart(product, userId)
        .then(({ cart }) => setCartItems(cart))
        .catch(() => { })
        .then(() => setLoading(false))
    }
  }

  const loadUserCart = (userId) => {
    if (loading === false && userId) {

      setLoading(true);
      return CartService.fetchUserCart(userId)
        .then(({ cart }) => {
          if (cart.length > 0) {
            setCartItems(cart)
          }
          setLoading(false)
          return cart
        })
        .catch(() => {
          setCartItems([])
          setLoading(false)
          return []
        })
    }
    return new Promise((resolve) => resolve([]))
  }

  const handleCheckout = (userId, eraseForDemo) => {
    if (eraseForDemo && eraseForDemo.addDemoOrder) {
      const cart = cartItems.slice()
      eraseForDemo.addDemoOrder({
        id: `${(Math.random() + 1).toString(36).substring(7)}`,
        orderAddress: "60 Wall Street, New York City, 10005",
        orderTotal: cart.reduce((sum, p) => sum += p.price, 0),
        purchaseDate: "2/17/22",
        cartItems: cart
      })
      setCartItems([])
      return
    }

    setLoading(true);
    CartService.checkoutUserCart(userId)
      .then(() => setCartItems([]))
      .catch(() => { })
      .then(() => setLoading(false))
  }

  const value = {
    loading,
    cartItems,
    loadUserCart,
    addItemToCart,
    removeFromCart,
    handleCheckout,
    useDemoCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export default useCart;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};