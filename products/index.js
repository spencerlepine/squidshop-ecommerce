/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
// eslint-disable-next-line no-unused-vars
const db = require('./src/models');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const testDbConnection = () => (
  // eslint-disable-next-line no-underscore-dangle
  db.orm._connection.contactPoints.length > 0
);

app.get('/status', async (req, res) => {
  res.status(200).json({
    service: 'products',
    status: 'running',
    databaseConnection: testDbConnection() ? 'success' : 'failure',
  });
});

const { PORT } = config;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
