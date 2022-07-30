/* eslint-disable no-unused-vars */
const ExpressCassandra = require('express-cassandra');
const dbConfig = require('./db.config');

const models = ExpressCassandra.createClient({
  clientOptions: dbConfig(ExpressCassandra),
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1,
    },
    migration: 'safe',
  },
});

const ProductModel = models.loadSchema('Product', {
  fields: {
    id: {
      type: 'varchar',
      default: { $db_function: 'uuid()' },
    },
    title: { type: 'varchar', default: 'untitled' },
    price: 'float',
    description: { type: 'varchar', default: 'no description provided' },
    category: { type: 'text', default: 'misc' },
    image: 'varchar',
    rating_rate: 'float',
    rating_count: 'int',
    created: {
      type: 'timestamp',
      default: { $db_function: 'toTimestamp(now())' },
    },
    updated: {
      type: 'timestamp',
      default: { $db_function: 'toTimestamp(now())' },
    },
  },
  key: ['id'],
});

// MyModel or models.instance.Person can now be used as the model instance
// nsole.log(models.instance.Product === ProductModel);

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
ProductModel.syncDB((err, result) => {
  if (err) throw err;
  // result == true if any database schema was updated
  // result == false if no schema change was detected in your models
});

module.exports = models;
