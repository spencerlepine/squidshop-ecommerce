/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', proxy(config.USERS_API_URL));
app.use('/products', proxy(config.PRODUCTS_API_URL));
app.use('/orders', proxy(config.ORDERS_API_URL));

app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'running',
    service: 'gateway',
    config,
  });
});

const { PORT } = config;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
