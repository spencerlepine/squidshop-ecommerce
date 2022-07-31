/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
// eslint-disable-next-line no-unused-vars
const db = require('./src/database');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/status', (req, res) => (
  res.status(200).json({
    status: 'running',
    service: 'users',
  })
));

const { PORT } = config;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
