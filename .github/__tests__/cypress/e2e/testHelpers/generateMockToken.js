const jwt = require('jsonwebtoken');

// Hard code the test environment secrets for now
// const config = require('../../config');
// const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = config;
const ACCESS_TOKEN_SECRET = 'testSecret';
const REFRESH_TOKEN_SECRET = 'testRefreshSecret';
const EXPIRATION_TIME = 10000000; // in mins

module.exports = {
  generateAccessToken: (user) => {
    const options = { expiresIn: EXPIRATION_TIME };
    const token = jwt.sign(user, ACCESS_TOKEN_SECRET, options);
    return token;
  },
  generateRefreshToken: (user) => {
    const token = jwt.sign(user, REFRESH_TOKEN_SECRET);
    return token;
  }
};
