const express = require('express');
const profileRoutes = require('./controllers/product');

const router = express.Router();

router.use('/product', profileRoutes);

router.get('/status', (req, res) => (
  res.status(200).json({
    status: 'running',
    service: 'products',
  })
));

module.exports = router;
