import env from "react-dotenv";

let REACT_GATEWAY_API_URL = 'http://localhost:5000'

if (process.env.NODE_ENV === 'production') {
  REACT_GATEWAY_API_URL = env.REACT_GATEWAY_API_URL
}

if (process.env.REACT_GATEWAY_API_URL) {
  REACT_GATEWAY_API_URL = process.env.REACT_GATEWAY_API_URL;
}

const config = {
  REACT_GATEWAY_API_URL
}

export default config