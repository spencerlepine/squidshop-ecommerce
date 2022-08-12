import axios from 'axios'
import config from './config'
const AUTH_API = `${config.REACT_GATEWAY_API_URL}/users`

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true
};

export const authenticateUser = () => new Promise((resolve, reject) => {
  axios.get(`${AUTH_API}/authenticate`, axiosConfig)
    .then((response) => {
      resolve(response.data)
    })
    .catch(reject)
});

export const signInWithEmailAndPassword = (formData) => new Promise((resolve, reject) => {
  axios.post(`${AUTH_API}/login`, formData, axiosConfig)
    .then((response) => {
      resolve(response.data)
    })
    .catch(reject)
});

export const createUserWithEmailAndPassword = (formData) => new Promise((resolve, reject) => {
  axios.post(`${AUTH_API}/register`, formData, axiosConfig)
    .then((response) => {
      resolve(response.data)
    })
    .catch(reject)
});

export const logoutUser = () => new Promise((resolve, reject) => {
  axios.get(`${AUTH_API}/logout`, axiosConfig)
    .then((response) => {
      resolve(response.data)
    })
    .catch(reject)
});

export const fetchAccountDetails = (userId) => new Promise((resolve, reject) => {
  axios.get(`${AUTH_API}/profile/${userId}`, axiosConfig)
    .then((response) => {
      resolve(response.data)
    })
    .catch(reject)
});