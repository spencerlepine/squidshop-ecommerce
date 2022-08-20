/* eslint-disable consistent-return */
const config = require('../../config');

const { ACCESS_TOKEN_SECRET } = config;

const authenticateTokenMiddleware = (req, res, next) => {
  const token = req.cookies && req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({
      message: 'Please provide valid token',
    });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err) => {
    if (err) {
      // Token no longer valid
      return res.sendStatus(403);
    }

    next();
  });
};

module.exports = authenticateTokenMiddleware;
