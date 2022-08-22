// For products API, put init.cql in "products/src/database/scripts"
// Edit: squidshop.json (product data)
// Run: node jsonToCQL.js

const INPUT_FILE = './squidshop.json';
const OUTPUT_FILE = 'init.cql';

const { v4: uuid } = require('uuid');
const fs = require('fs');

const addLineToScript = (product) => {
  const query = `insert into Product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('${uuid()}', '${(product['title']).replace('\'', '')}', ${product['price']}, ${product['sale_price']}, '${(product['description']).replace('\'', '')}', '${(product['category']).replace('\'', '')}', '${product.image}', ${product['rating_rate']}, ${product['rating_count']}, toTimestamp(now()), toTimestamp(now()));\n`

  fs.appendFileSync(OUTPUT_FILE, query);
}

const initCassandra = `DROP KEYSPACE IF EXISTS mykeyspace;

CREATE KEYSPACE mykeyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}  AND durable_writes = true;

USE mykeyspace;

CREATE TABLE product (
    id varchar PRIMARY KEY,
    title varchar,
    price float,
    sale_price float,
    description varchar,
    category varchar,
    image varchar,
    rating_rate float,
    rating_count int,
    created timestamp,
    updated timestamp,
);

`

const main = () => {
  const jsonProducts = require(INPUT_FILE);

  // Try to delete existing file
  try {
    fs.unlinkSync(OUTPUT_FILE);
  } catch (e) {

  }

  // Add the schema to the init file
  fs.appendFileSync(OUTPUT_FILE, initCassandra);

  // Append an INSERT query for each product
  jsonProducts.forEach(addLineToScript);
}

main();
