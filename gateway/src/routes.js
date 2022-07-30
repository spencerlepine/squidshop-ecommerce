const express = require('express');
const proxy = require('express-http-proxy');
const config = require('../config');

const router = express.Router();

router.use('/users', proxy(config.USERS_API_URL));
router.use('/products', proxy(config.PRODUCTS_API_URL));
router.use('/orders', proxy(config.ORDERS_API_URL));
router.get('/status', (req, res) => {
  res.status(200).json({
    config,
  });
});

module.exports = router;
