/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const { PORT } = config;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
