import axios from 'axios'
import config from './config'
const ORDERS_API = `${config.REACT_GATEWAY_API_URL}/orders`

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true
};

export const fetchUserOrders = (userId) => new Promise((resolve, reject) => {
  axios.get(`${ORDERS_API}/${userId}`, axiosConfig)
    .then((response) => {
      resolve(response.data.orders)
    })
    .catch(reject)
});