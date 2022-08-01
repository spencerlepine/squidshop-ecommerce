import axios from 'axios'
import config from './config'
const API = config.REACT_GATEWAY_API_URL

export const fetchAllProducts = () => {
  axios.get(`${API}/products/catalog`)
    .then((response) => {
      console.log(response.data)
    })
}
