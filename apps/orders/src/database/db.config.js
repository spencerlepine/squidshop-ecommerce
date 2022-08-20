const config = require('../../config');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite3',
    define: {
      freezeTableName: true,
    },
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
    logging: false,
    define: {
      freezeTableName: true,
    },
  },
  production: {
    host: config.MYSQL_HOST,
    port: 5432,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE,
    dialect: config.DATABASE_DIALECT,
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
