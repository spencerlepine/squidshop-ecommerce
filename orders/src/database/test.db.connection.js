const config = require('../../config');
const db = require('./index');

const testDbConnection = (cb) => db.sequelize.authenticate()
  .then(() => cb(true))
  .catch(() => cb(false));

module.exports = async () => {
  // WARNING: hard coded, used for development
  // Manually check the Cassandra Database connection
  if (config.NODE_ENV === 'test') {
    return true;
  }

  const isConnected = await testDbConnection((status) => status);
  return isConnected;
};
