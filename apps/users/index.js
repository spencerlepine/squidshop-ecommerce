/* eslint-disable no-console, no-unused-vars */
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const routes = require('./src/routes');
const { errorLogger, errorResponder, failSafeHandler } = require('./src/middleware/errorHandlers');
const db = require('./src/database/connection');
const config = require('./config');

const app = express();

// Middlewares
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
app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use(express.json());

// Routes
app.use(routes);

// Error Handlers
app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeHandler);

const { PORT } = config;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
