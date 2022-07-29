const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/customer', proxy(config.CUSTOMER_API_URL));
app.use('/shopping', proxy(config.SHOPPING_API_URL));
app.use('/products', proxy(config.PRODUCTS_API_URL));

const { PORT } = config;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
