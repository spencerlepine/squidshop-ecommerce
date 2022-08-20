const config = require('../../config');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite3',
    define: {
      freezeTableName: true,
      updatedAt: 'updatedat',
      createdAt: 'createdat',
    },
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
    logging: false,
    define: {
      freezeTableName: true,
      updatedAt: 'updatedat',
      createdAt: 'createdat',
    },
  },
  production: {
    host: config.POSTGRES_HOST,
    port: 5432,
    user: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DATABASE,
    dialect: config.DATABASE_DIALECT,
    define: {
      freezeTableName: true,
      updatedAt: 'updatedat',
      createdAt: 'createdat',
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
