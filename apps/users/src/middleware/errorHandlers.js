/* eslint-disable no-unused-vars */
module.exports = {
  errorLogger: (error, req, res, next) => {
    // Logging errors or pass to library
    console.error(error); // or using any fancy logging library
    next(error);
  },
  errorResponder: (error, req, res, next) => {
    // Custom condition check, set in .catch blocks
    if (error.type === 'time-out') {
      res.status(408).send(error);
    } else { next(error); }
  },
  failSafeHandler: (error, req, res, next) => {
    // Handle response to client
    res.status(500).send(error);
  },
};
