const jwt = require('jsonwebtoken');
const config = require('../../config');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = config;

const EXPIRATION_TIME = 10; // in mins

let refreshTokens = [];

const deleteRefreshToken = (oldToken) => {
  refreshTokens = refreshTokens.filter((token) => token !== oldToken);
};

module.exports = {
  generateAccessToken: (user) => {
    const options = { expiresIn: EXPIRATION_TIME };
    return jwt.sign(user, ACCESS_TOKEN_SECRET, options);
  },
  generateRefreshToken: (user) => {
    const token = jwt.sign(user, REFRESH_TOKEN_SECRET);
    refreshTokens.push(token);
    return token;
  },
  deleteRefreshToken,
  REFRESH_TOKEN_SECRET,
};
