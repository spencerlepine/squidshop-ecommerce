// For products API, put init.cql in "client/src/components/Product/DataLoader/demoProducts.json"
// Run: node generateProducts.js

const OUTPUT_FILE = 'products.json';
const PROUDCTS_PER_DEPT_COUNT = 20;
const DEPARTMENTS = [
  "tees",
  "hoodies",
  "hats",
  "decor",
  "gear",
  "surf boards"
]

const { v4: uuid } = require('uuid');
const fs = require('fs');

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRating = () => {
  const ratingAvg = Number(Math.random() * 5).toFixed(1);
  let ratings = 0;

  if (ratingAvg > 0) {
    ratings = getRandomInt(3, 400)
  }

  return {
    ratingRate: ratingAvg,
    ratingCount: ratings
  }
}

const generatePrice = () => {
  const tensPlace = getRandomInt(0, 9);
  const ones = [4, 5, 9];
  const onesPlace = ones[Math.floor(Math.random() * ones.length)]
  return Number(`${tensPlace}${onesPlace}.99`).toFixed(2)
}

const generateProduct = (departmentId) => {
  const thisPrice = generatePrice();
  const { ratingRate, ratingCount } = generateRating();

  const newProduct = {
    id: uuid(),
    title: "TODO, with title case!",
    description: "TODO",
    description: "TODO",
    image: "TODO",
    category: departmentId,
    price: Number(thisPrice),
    rating_rate: Number(ratingRate),
    rating_count: ratingCount,
  }

  // 15% is might have a sale price
  if (Math.random() * 100 <= 15) {
    newProduct.sale_price = Number((newProduct.price * (getRandomInt(10, 40) / 100)).toFixed(2))
  }

  return newProduct
}


const main = () => {
  const products = [];

  // Generate products in each department
  DEPARTMENTS.forEach((departmentId) => {
    for (let d = 0; d < PROUDCTS_PER_DEPT_COUNT; d++) {
      const newProduct = generateProduct(departmentId)
      products.push(newProduct);
    }
  });

  // Convert the list into a string
  const FILE_DATA = JSON.stringify(products, null, "\t");

  // Try to delete existing file
  try {
    fs.unlinkSync(OUTPUT_FILE);
  } catch (e) {

  }

  // Write to the file
  fs.appendFileSync(OUTPUT_FILE, FILE_DATA);
}

main()
