const express = require('express');
const ordersRoutes = require('./controllers/orders');
const statusRoutes = require('./controllers/status');

const router = express.Router();

router.use('/orders', ordersRoutes);
router.use('/status', statusRoutes);

module.exports = router;
