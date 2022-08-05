const express = require('express');
const profileRoutes = require('./controllers/profile');
const statusRoutes = require('./controllers/status');
// const exampleRoutes = require('./controllers/example'); // seperate Authorize app
// const loginRoutes = require('./controllers/login');
const registerRoutes = require('./controllers/register');
// const tokenRoutes = require('./controllers/token');
// const logoutRoutes = require('./controllers/logout');
// const authenticateTokenMiddleware = require('../middleware/authenticateToken');

const router = express.Router();

// TODO
// router.use('/example', authenticateTokenMiddleware, exampleRoutes);
router.use('/profile', profileRoutes);
router.use('/status', statusRoutes);
// router.use('/login', loginRoutes);
router.use('/register', registerRoutes);
// router.use('/logout', logoutRoutes);
// router.use('/token', tokenRoutes);

module.exports = router;
