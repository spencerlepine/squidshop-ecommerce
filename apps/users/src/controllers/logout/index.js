const express = require('express');

const router = express.Router();
const { deleteRefreshToken } = require('../generateToken');

router.delete('/', (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(403);
  }
  deleteRefreshToken(token);
  return res.sendStatus(204);
});

module.exports = router;
