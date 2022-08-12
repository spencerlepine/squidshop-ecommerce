/* eslint-disable no-unused-vars */
module.exports = {
  errorLogger: (error, req, res, next) => { // for logging errors
    console.error(error); // or using any fancy logging library HERE TODO
    next(error); // forward to next middleware
  },
  errorResponder: (error, req, res, next) => { // responding to client
    if (error.type === 'time-out') { // arbitrary condition check
      res.status(408).send(error);
    } else { next(error); } // forwarding exceptional case to fail-safe middleware
  },
  failSafeHandler: (error, req, res, next) => { // generic handler
    res.status(500).send(error);
  },
};
