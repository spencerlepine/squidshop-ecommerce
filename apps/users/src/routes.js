const express = require('express');
const profileRoutes = require('./controllers/profile');
const statusRoutes = require('./controllers/status');

const router = express.Router();

router.use('/profile', profileRoutes);
router.use('/status', statusRoutes);

module.exports = router;
