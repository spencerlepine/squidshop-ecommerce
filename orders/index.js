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

const testDbConnection = (cb) => db.sequelize.authenticate()
  .then(() => cb(true))
  .catch(() => cb(false));

app.get('/status', async (req, res) => {
  res.status(200).json({
    service: 'orders',
    status: 'running',
    databaseConnection: await testDbConnection((connected) => (connected ? 'success' : 'failure')),
  });
});

const { PORT } = config;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
