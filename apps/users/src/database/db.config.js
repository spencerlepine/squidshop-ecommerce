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
    host: config.DATABASE_HOST,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_NAME,
    dialect: config.DATABASE_DIALECT,
    quoteIdentifiers: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
