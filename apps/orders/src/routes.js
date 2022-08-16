const express = require('express');
const ordersRoutes = require('./controllers/orders');
const cartRoutes = require('./controllers/carts');
const statusRoutes = require('./controllers/status');

const router = express.Router();

router.use('/orders', ordersRoutes);
router.use('/status', statusRoutes);
router.use('/', cartRoutes);

module.exports = router;
