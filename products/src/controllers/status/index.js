const express = require('express');
const testDbConnection = require('../../models/test.db.connection');

const router = express.Router();

router.get('/', (req, res) => {
  const databaseConnected = testDbConnection();
  const statusCode = databaseConnected ? 200 : 500;

  res.status(statusCode).json({
    service: 'products',
    status: 'running',
    databaseConnected: databaseConnected ? 'success' : 'failure',
  });
});

module.exports = router;
