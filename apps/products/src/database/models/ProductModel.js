/*
CREATE TABLE products (
    id varchar PRIMARY KEY,
    title varchar,
    price float,
    description varchar,
    category varchar,
    image varchar,
    rating_rate float,
    rating_count int,
    created timestamp,
    updated timestamp,
);
*/
module.exports = {
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
