const express = require('express');

const router = express.Router();
const { deleteRefreshToken } = require('../generateToken');

const extractToken = (req) => {
  const cookie = req.cookies.accessToken;
  const header = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';
  return cookie || header;
};

router.delete('/', (req, res) => {
  const token = extractToken(req);

  if (!token) {
    return res.sendStatus(403);
  }
  deleteRefreshToken(token);

  res.cookie('accessToken', '', { httpOnly: true });
  res.cookie('refreshToken', '', { httpOnly: true });
  return res.sendStatus(204);
});

module.exports = router;
