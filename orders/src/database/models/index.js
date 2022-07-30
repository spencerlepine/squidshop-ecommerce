/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const configVars = require('../../../config');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || configVars.NODE_ENV;
const configPath = `${__dirname}/../db.config.js`;
const config = require(configPath)[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
