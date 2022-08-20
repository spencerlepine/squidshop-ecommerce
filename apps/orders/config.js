if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8003,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE_PORT: process.env.MYSQL_DATABASE_PORT || 3306,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  DATABASE_DIALECT: 'mysql',
};

module.exports = config;
