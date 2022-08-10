/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const config = require('./config');

const app = express();

const whitelist = ['http://localhost:3000']; // frontend, hard coded, TODO
const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
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
