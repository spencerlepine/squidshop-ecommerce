require('dotenv').config();

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8001,
  MYSQL_CONNECTION_STRING: process.env.MYSQL_CONNECTION_STRING,
};

module.exports = config;
