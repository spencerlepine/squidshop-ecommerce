const rateLimit = require('express-rate-limit');
const config = require('../../config');

module.exports = () => {
  if (config.NODE_ENV === 'production') {
    return rateLimit({
      windowMs: 1000, // 1000 milliseconds
      max: 2,
      message: 'Please slow down requests, you have exceeded the limit',
      standardHeaders: true,
      legacyHeaders: false,
    });
  }

  return (res, req, next) => next();
};
