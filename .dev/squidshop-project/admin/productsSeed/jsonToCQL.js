const jsonProducts = require('./squidshop.json')
const { v4: uuid } = require('uuid');

const fs = require('fs');

const generateUUID = () => {
  const newId = uuid();
  return newId
}

jsonProducts.forEach((product) => {
  const image = product.image
  //const str = "insert into Product (id, title, price, description, category, image, rating_rate, rating_count, created, updated) values ('80f56bf3 asfdadfsfd', 'Anas bahamensis', 522.03, 'Pemagna vulenatibus et magnis dis ......', 'Computers', 'http://dummyimage.com/147x100.png/ff4444/ffffff', 2.0, 1, dateof(now()), dateof(now()));"
  const query = `insert into Product (id, title, price, description, category, image, rating_rate, rating_count, created, updated) values ('${generateUUID()}', '${(product['title']).replace('\'', '')}', ${product['price']}, '${(product['description']).replace('\'', '')}', '${(product['category']).replace('\'', '')}', '${image}', ${product['rating_rate']}, ${product['rating_count']}, toTimestamp(now()), toTimestamp(now()));\n`
  fs.appendFileSync('seed.cql', query);
})
