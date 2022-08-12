import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as cartApi from '../api/cart';

export const CartContext = React.createContext();

const demoCart = [
  {
    "id": "2310105834087",
    "title": "Zaz Kangeroo Hoodie",
    "description": "This is a variable product called a Chaz Kangeroo Hoodie",
    "image": "http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg",
    "category": "hoodies",
    "price": 84.86,
    "rating_rate": 0,
    "rating_count": 0
  },
  {
    "id": "2310105834087",
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
  const [loading, setLoading] = useState(true);

  const useDemoCart = () => {
    setCartItems(demoCart)
    setLoading(false)
  }

  const addItemToCart = (productId, userId, options) => {
    if (options && options.isDemoCart && options.product) {
      setCartItems((prevList) => ([...prevList, options.product]))
      return
    }

    setLoading(true);
    cartApi.addProductToCart(productId, userId)
      .then((cart) => setCartItems(cart))
      .catch(() => { })
      .then(() => setLoading(false))
  }

  const loadUserCart = (userId) => {
    setLoading(true);
    cartApi.fetchUserCart(userId)
      .then((cart) => setCartItems(cart))
      .catch(() => setCartItems([]))
      .then(() => setLoading(false))
  }

  const handleCheckout = (userId, eraseForDemo) => {
    if (eraseForDemo) {
      setCartItems([])
      return
    }

    setLoading(true);
    cartApi.checkoutUserCart(userId)
      .then(() => setCartItems([]))
      .catch(() => { })
      .then(() => setLoading(false))
  }

  const value = {
    loading,
    cartItems,
    loadUserCart,
    addItemToCart,
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