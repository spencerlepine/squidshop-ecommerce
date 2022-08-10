const jsonProducts = require('./squidshop.json')

const fs = require('fs');

const output = [];

jsonProducts.forEach((product) => {
  const image = product.image.split(',')[0]
  const newProduct = {
    ...product,
    image: image
  }
  output.push(newProduct);
})

fs.appendFileSync('updated.json', JSON.stringify(output));
