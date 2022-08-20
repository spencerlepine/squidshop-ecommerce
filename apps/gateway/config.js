if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  PORT: process.env.PORT || 5000,
  USERS_API_URL: process.env.USERS_API_URL || 'http://localhost:8001',
  PRODUCTS_API_URL: process.env.PRODUCTS_API_URL || 'http://localhost:8002',
  ORDERS_API_URL: process.env.ORDERS_API_URL || 'http://localhost:8003',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'testSecret',
  REFRESH_TOKEN_SECRET: process.env.REFRESSH_TOKEN_SECRET || 'testRefreshSecret',
};

module.exports = config;
