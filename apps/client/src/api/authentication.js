import axios from 'axios'
import config from './config'
const AUTH_API = `${config.REACT_GATEWAY_API_URL}/users`

export const authenticateUser = () => new Promise((resolve, reject) => {
  axios.get(`${AUTH_API}/authenticate`)
  .then((response) => {
    resolve(response.data)
  })
  .catch(reject)
});

export const signInWithEmailAndPassword = (formData) => new Promise((resolve, reject) => {
  axios.post(`${AUTH_API}/login`, formData)
  .then((response) => {
    resolve(response.data)
  })
  .catch(reject)
});

export const createUserWithEmailAndPassword = (formData) => new Promise((resolve, reject) => {
  axios.post(`${AUTH_API}/register`, formData)
  .then((response) => {
    resolve(response.data)
  })
  .catch(reject)
});

// export const logoutUser // TODO