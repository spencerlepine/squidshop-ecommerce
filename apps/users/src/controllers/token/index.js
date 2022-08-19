/* eslint-disable consistent-return */
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const { generateAccessToken, REFRESH_TOKEN_SECRET, refreshTokens } = require('../generateToken');

const extractToken = (req) => {
  const cookie = req.cookies.refreshToken;
  const header = req.headers.authorization.split(' ')[1];
  return cookie || header;
};

router.post('/', (req, res) => {
  // const refreshToken = req.headers.authorization.split(' ')[1];
  const refreshToken = extractToken(req);

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  // Check the storage if this token is valid
  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(403);
    }
    const { email, id } = user;
    const accessToken = generateAccessToken({ email, id });
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.status(204).json({
      accessToken,
    });
  });
});

module.exports = router;
