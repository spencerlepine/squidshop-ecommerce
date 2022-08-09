const express = require('express');
const testDbConnection = require('../../database/test.db.connection');

const router = express.Router();

router.get('/', async (req, res) => {
  const databaseConnected = await testDbConnection();
  const statusCode = databaseConnected ? 200 : 500;

  res.status(statusCode).json({
    service: 'orders',
    status: 'running',
    databaseConnected: databaseConnected ? 'success' : 'failure',
  });
});

module.exports = router;
