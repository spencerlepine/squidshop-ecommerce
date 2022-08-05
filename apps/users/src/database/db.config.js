const config = require('../../config');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite3',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
    logging: false,
  },
  production: {
    HOST: config.DATABASE_HOST,
    USER: config.DATABASE_USER,
    PASSWORD: config.DATABASE_PASSWORD,
    DB: config.DATABASE_NAME,
    dialect: config.DATABASE_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
