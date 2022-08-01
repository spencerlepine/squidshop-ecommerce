const config = require('../../config');
const db = require('./index');

module.exports = () => {
  // WARNING: hard coded, used for development
  // Manually check the Cassandra Database connection
  if (config.NODE_ENV === 'test') {
    return true;
  }

  try {
    console.log(Object.keys(db));
    console.log(db);
    // eslint-disable-next-line no-underscore-dangle
    const connections = db.orm._connection.contactPoints;
    if (connections.length > 0) {
      return true;
    }
    return false;
  } catch (e) {
    console.log(e)
    return false;
  }
};
