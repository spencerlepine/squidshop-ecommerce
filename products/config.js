require('dotenv').config();

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8002,
  CASSANDRA_HOST: process.env.CASSANDRA_HOST || '127.0.0.1',
  CASSANDRA_DATACENTER: process.env.CASSANDRA_DATACENTER || 'datacenter1',
  CASSANDRA_KEYSPACE: process.env.CASSANDRA_KEYSPACE || 'mykeyspace',
  CASSANDRA_USER: process.env.CASSANDRA_USER || 'my_user',
  CASSANDRA_PASSWORD: process.env.CASSANDRA_PASSWORD || 'my_password',
  CASSANDRA_PORT: process.env.CASSANDRA_PORT || '9042',
};

module.exports = config;
