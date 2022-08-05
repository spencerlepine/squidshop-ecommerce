/* eslint-disable consistent-return */
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const { generateAccessToken, REFRESH_TOKEN_SECRET, refreshTokens } = require('../generateToken');

router.post('/', (req, res) => {
  const refreshToken = req.headers.authorization.split(' ')[1];

  if (!refreshToken) {
    return res.sendStatus(401);
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(403);
    }
    const accessToken = generateAccessToken({ name: user.name });
    res.status(204).json({
      accessToken,
    });
  });
});

module.exports = router;
