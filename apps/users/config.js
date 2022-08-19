if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8001,
  MYSQL_DATABASE_HOST: process.env.MYSQL_DATABASE_HOST,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  DATABASE_DIALECT: 'mysql',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'testSecret',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refreshSecret',
};

module.exports = config;
