import axios from 'axios'
import config from './config'
const AUTH_API = `${config.REACT_GATEWAY_API_URL}/users`

export const authenticateUser = (callback) => {
  axios.get(`${AUTH_API}/authenticate`)
    .then((response) => {
      callback(response.data)
    })
}
