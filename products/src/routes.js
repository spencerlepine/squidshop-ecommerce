const express = require('express');
const productRoutes = require('./controllers/product');

const router = express.Router();

router.use('/product', productRoutes);

module.exports = router;
