require("dotenv").config()

const config = {
  PORT: process.env.PORT || 5000,
  CUSTOMER_API_URL: process.env.CUSTOMER_API_URL,
  SHOPPING_API_URL: process.env.SHOPPING_API_URL,
  PRODUCTS_API_URL: process.env.PRODUCTS_API_URL
}

module.exports = config