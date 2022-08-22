let REACT_APP_GATEWAY_API_URL = 'http://localhost:5000'


if (process.env.REACT_APP_GATEWAY_API_URL) {
  REACT_APP_GATEWAY_API_URL = process.env.REACT_APP_GATEWAY_API_URL;
}

const config = {
  REACT_APP_GATEWAY_API_URL
}

export default config