import axios from 'axios'
import config from './config'
const ORDERS_API = `${config.REACT_GATEWAY_API_URL}/orders`

export const fetchUserOrders = (userId) => new Promise((resolve, reject) => {
  axios.get(`${ORDERS_API}/${userId}`)
    .then((response) => {
      resolve(response.data.orders)
    })
    .catch(reject)
});