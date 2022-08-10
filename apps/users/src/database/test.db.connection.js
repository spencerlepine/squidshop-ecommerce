const config = require('../../config');
const db = require('./index');

module.exports = async () => {
  // WARNING: hard coded, used for development
  // Manually check the Cassandra Database connection
  if (config.NODE_ENV === 'test') {
    return true;
  }

  const isConnected = await db.sequelize.authenticate()
    .then(() => true)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return isConnected;
};
