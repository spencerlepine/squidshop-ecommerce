/* eslint-disable consistent-return */
const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_USER,
});

const connectDatabase = () => {
  connection.connect((err) => {
    if (err) {
      return console.error(`MySQL Connection Error: ${err.message}`);
    }

    console.log('Connected to the MySQL server.');
  });
};

const closeDatabase = () => {
  connection.end((err) => {
    if (err) {
      return console.error(`MySQL Disconnect Error: ${err.message}`);
    }
    console.log('Close the database connection.');
  });
};

module.exports = {
  closeDatabase,
  connectDatabase,
  destroyConnection: () => connection.destroy(),
};
