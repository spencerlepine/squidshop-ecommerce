/* eslint-disable no-unused-vars, no-console  */
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const db = require('./src/database/connection');
const config = require('./config');

const app = express();

const whitelist = ['http://localhost:3000']; // frontend, hard coded, TODO
const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(routes);

// Error Handlers
const errorLogger = (error, req, res, next) => { // for logging errors
  console.error(error); // or using any fancy logging library HERE
  next(error); // forward to next middleware
};

const errorResponder = (error, req, res, next) => { // responding to client
  if (error.type === 'time-out') { // arbitrary condition check
    res.status(408).send(error);
  } else { next(error); } // forwarding exceptional case to fail-safe middleware
};

const failSafeHandler = (error, req, res, next) => { // generic handler
  res.status(500).send(error);
};

app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeHandler);

const { PORT } = config;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
