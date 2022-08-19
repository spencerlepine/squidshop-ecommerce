const express = require('express');

const router = express.Router();
const { deleteRefreshToken } = require('../generateToken');

router.delete('/', (req, res) => {
  // const token = req.headers.authorization;
  const token = req.cookies && req.cookies.accessToken;

  if (!token) {
    return res.sendStatus(403);
  }
  deleteRefreshToken(token);

  res.cookie('accessToken', '', { httpOnly: true });
  res.cookie('refreshToken', '', { httpOnly: true });
  return res.sendStatus(204);
});

module.exports = router;
