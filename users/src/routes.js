const express = require('express');
const profileRoutes = require('./controllers/profile');

const router = express.Router();

router.use('/profile', profileRoutes);

module.exports = router;
