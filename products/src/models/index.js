/* eslint-disable no-console */
const Cassandra = require('express-cassandra');
const config = require('../../config');

const {
  CASSANDRA_HOST,
  CASSANDRA_PORT,
  CASSANDRA_KEYSPACE,
  // CASSANDRA_USER,
  // CASSANDRA_PASSWORD,
} = config;

const cassandra = Cassandra.createClient({
  clientOptions: {
    contactPoints: [CASSANDRA_HOST],
    protocolOptions: { port: Number(CASSANDRA_PORT) },
    keyspace: CASSANDRA_KEYSPACE,
    queryOptions: { consistency: Cassandra.consistencies.one },
    // eslint-disable-next-line max-len
    // authProvider: new models.driver.auth.PlainTextAuthProvider(CASSANDRA_USER, CASSANDRA_PASSWORD),
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1,
    },
    dropTableOnSchemaChange: false,
    createKeyspace: true,
  },
});

const ProductSchema = {
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
};
cassandra.loadSchema('Product', ProductSchema);

// cassandra.connect((err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     // onsole.log(cassandra.modelInstance.users);
//     // onsole.log(cassandra.modelInstance.users === UserSchema);
//   }
// });

module.exports = cassandra;
