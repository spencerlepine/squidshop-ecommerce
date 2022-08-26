/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const config = require('../../config');

const { REFRESH_TOKEN_SECRET } = config;

const authenticateTokenMiddleware = (req, res, next) => {
  const token = req.cookies && req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({
      message: 'Please provide valid token',
    });
  }

  jwt.verify(token, REFRESH_TOKEN_SECRET, (err) => {
    if (err) {
      // Token no longer valid
      console.error(err);
      return res.sendStatus(403);
    }

    next();
  });
};

module.exports = authenticateTokenMiddleware;
