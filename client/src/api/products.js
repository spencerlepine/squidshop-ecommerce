import axios from 'axios'
import config from './config'
// const PRODUCTS_API = `${config.REACT_GATEWAY_API_URL}/products`
// TODO
const PRODUCTS_API = config.REACT_GATEWAY_API_URL

export const fetchAllProducts = (callback) => {
  axios.get(`${PRODUCTS_API}/catalog`)
    .then((response) => {
      callback(response.data)
    })
}
