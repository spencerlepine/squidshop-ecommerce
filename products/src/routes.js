const express = require('express');
const profileRoutes = require('./controllers/product');

const router = express.Router();

router.use('/product', profileRoutes);

module.exports = router;
