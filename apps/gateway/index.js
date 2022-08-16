const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const { errorLogger, errorResponder, failSafeHandler } = require('./src/middlewares/errorHandler');
const setupLogger = require('./src/logger/setup');
const config = require('./config');

const app = express();

// Middlewares Setup
app.use(cors());
app.use(express.json());
setupLogger(app, config);

// Routes
app.use('/users', proxy(config.USERS_API_URL));
app.use('/products', proxy(config.PRODUCTS_API_URL));
app.use('/orders', proxy(config.ORDERS_API_URL));
app.use('/carts', proxy(config.ORDERS_API_URL)); // orders and cart is one service

app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'running',
    service: 'gateway',
    config,
  });
});

// Error Handlers
app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeHandler);

// Start the Server
const { PORT } = config;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
