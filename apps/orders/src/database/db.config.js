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
    HOST: config.POSTGRES_HOST,
    USER: config.POSTGRES_USER,
    PASSWORD: config.POSTGRES_PASSWORD,
    DB: config.POSTGRES_DATABASE,
    dialect: config.DATABASE_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
