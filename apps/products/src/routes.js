const express = require('express');
const productRoutes = require('./controllers/product');
const departmentRoutes = require('./controllers/department');
const statusRoutes = require('./controllers/status');
const catalogRoutes = require('./controllers/catalog');

const router = express.Router();

router.use('/product', productRoutes);
router.use('/department', departmentRoutes);
router.use('/status', statusRoutes);
router.use('/catalog', catalogRoutes);

module.exports = router;
