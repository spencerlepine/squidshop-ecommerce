require('dotenv').config();

const config = {
  PORT: process.env.PORT || 5000,
  CUSTOMER_API_URL: process.env.CUSTOMER_API_URL || 'http://localhost:8001',
  SHOPPING_API_URL: process.env.SHOPPING_API_URL || 'http://localhost:8002',
  PRODUCTS_API_URL: process.env.PRODUCTS_API_URL || 'http://localhost:8003',
};

module.exports = config;
