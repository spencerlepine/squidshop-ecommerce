require('dotenv').config();

const config = {
  PORT: process.env.PORT || 5000,
  USERS_API_URL: process.env.USERS_API_URL || 'http://localhost:8001',
  ORDERS_API_URL: process.env.ORDERS_API_URL || 'http://localhost:8002',
  PRODUCTS_API_URL: process.env.PRODUCTS_API_URL || 'http://localhost:8003',
};

module.exports = config;
