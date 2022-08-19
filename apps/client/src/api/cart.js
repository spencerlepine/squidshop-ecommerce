import axios from 'axios'
import config from './config'
const CARTS_API = `${config.REACT_GATEWAY_API_URL}/carts`

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true
};

// should return new entire cart
export const addProductToCart = (product, userId) => new Promise((resolve, reject) => {
  axios.post(`${CARTS_API}/add/${userId}`, product, axiosConfig)
    .then((response) => {
      resolve(response.data.cart)
    })
    .catch((err) => reject(err))
});

export const removeProductFromCart = (cartItemId, userId) => new Promise((resolve, reject) => {
  axios.delete(`${CARTS_API}/remove/${userId}`, { cartItemId }, axiosConfig)
    .then((response) => {
      resolve(response.data.cart)
    })
    .catch((err) => reject(err))
});

export const fetchUserCart = (userId) => new Promise((resolve, reject) => {
  axios.get(`${CARTS_API}/${userId}`, axiosConfig)
    .then((response) => {
      resolve(response.data.cart)
    })
    .catch((err) => reject(err))
});

export const checkoutUserCart = (userId) => new Promise((resolve, reject) => {
  axios.post(`${CARTS_API}/checkout/${userId}`, axiosConfig)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => reject(err))
});