const express = require('express');
const productRoutes = require('./controllers/product');
const statusRoutes = require('./controllers/status');

const router = express.Router();

router.use('/product', productRoutes);
router.use('/status', statusRoutes);

module.exports = router;
