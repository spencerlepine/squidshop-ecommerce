import axios from "axios"
import config from '../config'

const AUTHENTICATE_ENDPOINT = '/users/authenticate';
const REFRESH_TOKEN_ENDPOINT = '/users/token';

const axiosConfig = {
  baseURL: config.REACT_APP_GATEWAY_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true
}

const instance = axios.create(axiosConfig);

class ApiInstance {
  constructor(urlPath) {
    this.loading = false
    this.url = `${config.REACT_APP_GATEWAY_API_URL}${urlPath}`
  }

  request(axiosMethod, endpointUrl, data) {
    if (this.loading === false) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        instance[axiosMethod](`${this.url}${endpointUrl}`, data)
          .then((response) => {
            console.log(response.headers)
            resolve(response.data)
          })
          .catch(reject)
          .then(() => this.loading = false)
      })
    }
    return new Promise((res, rej) => rej())
  }
}

// Automatically request new Refresh tokens every failed request
// HttpOnly Cookies are sent back/forth automatically by the browser
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    const wasLoginAttempt = originalConfig.url.slice(-(AUTHENTICATE_ENDPOINT.length)) !== AUTHENTICATE_ENDPOINT

    if (!wasLoginAttempt && err.response) {
      // Check if Access Token has expired
      if (err.response.status === 403 && !originalConfig._retry) {
        originalConfig._retry = true;

        // Attempt to generate new refresh token
        try {
          const rs = await instance.post(REFRESH_TOKEN_ENDPOINT);
          // Will save HttpOnly in browser Cookie on response
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);


export default ApiInstance;
