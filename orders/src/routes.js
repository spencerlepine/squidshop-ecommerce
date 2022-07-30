const express = require('express');
const ordersRoutes = require('./controllers/orders');

const router = express.Router();

router.use('/orders', ordersRoutes);

module.exports = router;
