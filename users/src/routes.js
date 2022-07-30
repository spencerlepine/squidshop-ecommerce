const express = require('express');
const profileRoutes = require('./controllers/profile');

const router = express.Router();

router.use('/profile', profileRoutes);

router.get('/status', (req, res) => (
  res.status(200).json({
    status: 'running',
    service: 'users',
  })
));

module.exports = router;
