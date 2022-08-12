import axios from 'axios'
import config from './config'
const CARTS_API = `${config.REACT_GATEWAY_API_URL}/carts`

// should return new entire cart
export const addProductToCart = (product, userId) => new Promise((resolve, reject) => {
  axios.post(`${CARTS_API}/add/${userId}`, product)
    .then((response) => {
      resolve(response.data.cart)
    })
    .catch(reject)
});

export const removeProductFromCart = (cartItemId, userId) => new Promise((resolve, reject) => {
  axios.delete(`${CARTS_API}/remove/${userId}`, { cartItemId })
    .then((response) => {
      resolve(response.data.cart)
    })
    .catch(reject)
});

export const fetchUserCart = (userId) => new Promise((resolve, reject) => {
  axios.get(`${CARTS_API}/${userId}`)
    .then((response) => {
      resolve(response.data.cart)
    })
    .catch(reject)
});

export const checkoutUserCart = (userId) => new Promise((resolve, reject) => {
  axios.post(`${CARTS_API}/checkout/${userId}`)
    .then((response) => {
      resolve(response.data)
    })
    .catch(reject)
});