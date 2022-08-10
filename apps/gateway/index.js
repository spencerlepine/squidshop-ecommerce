/* eslint-disable no-unused-vars */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const proxy = require('express-http-proxy');
const config = require('./config');

const app = express();

// Middlewares Setup
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
if (config.NODE_ENV === 'production') {
  (async () => {
    await fs.promises.writeFile(`${__dirname}/access.log`, 'test', 'utf8');
  })();

  const productionLogStream = fs.createWriteStream(`${__dirname}/access.log`, { flags: 'a' });

  app.use(morgan({ stream: productionLogStream }));
} else {
  app.use(morgan('dev'));
}

// Routes
app.use('/users', proxy(config.USERS_API_URL));
app.use('/products', proxy(config.PRODUCTS_API_URL));
app.use('/orders', proxy(config.ORDERS_API_URL));

app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'running',
    service: 'gateway',
    config,
  });
});

// Error Handlers
const errorLogger = (error, req, res, next) => { // for logging errors
  console.error(error); // or using any fancy logging library HERE TODO
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

// Start the Server
const { PORT } = config;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
