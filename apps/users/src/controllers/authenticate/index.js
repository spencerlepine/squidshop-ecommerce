const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();

const config = require('../../../config');

const { ACCESS_TOKEN_SECRET } = config;

const authenticateTokenMiddleware = (req, res) => {
  const token = req.cookies && req.cookies.accessToken;

  if (!token) {
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
    return res.status(201).json(user);
  });
};

router.get('/', authenticateTokenMiddleware);

module.exports = authenticateTokenMiddleware;
