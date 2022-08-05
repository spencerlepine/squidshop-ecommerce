const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();

const config = require('../../../config');

const { ACCESS_TOKEN_SECRET } = config;

const authenticateTokenMiddleware = (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.status(401).json({
      message: 'Please provide valid token',
    });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: 'Token no longer valid',
      });
    }
    req.user = user;
    return res.sendStatus(201);
  });
};

router.get('/', authenticateTokenMiddleware);

module.exports = authenticateTokenMiddleware;
