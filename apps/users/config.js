if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8001,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'testSecret',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refreshSecret',
};

module.exports = config;
