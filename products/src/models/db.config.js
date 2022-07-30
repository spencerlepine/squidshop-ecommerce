const config = require('../../config');

const {
  CASSANDRA_HOST,
  CASSANDRA_DATACENTER,
  CASSANDRA_KEYSPACE,
  CASSANDRA_USER,
  CASSANDRA_PASSWORD,
  CASSANDRA_PORT,
} = config;

module.exports = (models) => ({
  contactPoints: [CASSANDRA_HOST],
  localDataCenter: CASSANDRA_DATACENTER,
  protocolOptions: { port: CASSANDRA_PORT },
  keyspace: CASSANDRA_KEYSPACE,
  queryOptions: { consistency: models.consistencies.one },
  socketOptions: { readTimeout: 25000 },
  authProvider: new models.driver.auth.PlainTextAuthProvider(CASSANDRA_USER, CASSANDRA_PASSWORD),
});
