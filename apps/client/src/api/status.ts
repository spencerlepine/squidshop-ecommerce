import axios from 'axios'
import config from '../config'
const API = config.REACT_APP_GATEWAY_API_URL

export const fetchApiStatus = (callback: Function) => {
  axios.get(`${API}/status`)
    .then((response) => {
      callback(response.data && response.data.status === 'running')
    })
    .catch((err) => callback(false, err))
}
