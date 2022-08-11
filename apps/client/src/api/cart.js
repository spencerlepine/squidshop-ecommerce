import axios from 'axios'
import config from './config'
const CARTS_API = `${config.REACT_GATEWAY_API_URL}/carts`

export const addProductToCart = (productId, userId, callback) => {
  axios.post(`${CARTS_API}/add/${userId}`, { productId })
    .then((response) => {
      callback(response.data)
    })
}
