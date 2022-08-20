const express = require('express');
const profileRoutes = require('./controllers/profile');
const statusRoutes = require('./controllers/status');
const loginRoutes = require('./controllers/login');
const registerRoutes = require('./controllers/register');
const tokenRoutes = require('./controllers/token');
const logoutRoutes = require('./controllers/logout');
const authenticateRoutes = require('./controllers/authenticate');
const rateLimiter = require('./middleware/rateLimiter');

const router = express.Router();

router.use('/profile', profileRoutes);

router.use('/login', rateLimiter(), loginRoutes);
router.use('/register', registerRoutes);
router.use('/logout', logoutRoutes);
router.use('/token', rateLimiter(10), tokenRoutes);
router.use('/authenticate', rateLimiter(10), authenticateRoutes);

// API up and running status
router.use('/status', statusRoutes);

module.exports = router;
