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

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decodedToken) => {
    if (err) {
      // Token no longer valid
      return res.sendStatus(403);
    }

    return res.status(201).json(decodedToken);
  });
};

router.get('/', authenticateTokenMiddleware);

module.exports = authenticateTokenMiddleware;
