import * as React from 'react';
import demoData from './demoProducts.json'
const demoProducts = demoData.products;

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: Array<any>) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

const extractDemoProductList = (list: Array<any>, optionalDepartmentId?: string, isSaleData?: any) => {
  // If given a specific depertmentId, filter the output list
  if (optionalDepartmentId) {
    list = list.filter(({ category }) => category === optionalDepartmentId)
  }


  // Optionally populate the product data to have sale prices
  if (isSaleData) {
    list = list.map((product) => ({
      ...product,
      sale_price: (Math.random() * product.price).toFixed(2)
    }))
  }

  return shuffleArray(list.slice(0, 20))
}

const extractDemoProduct = (list: Array<any>, isSaleData: any) => {
  const random = demoProducts[Math.floor(Math.random() * list.length)]
  const product = JSON.parse(JSON.stringify(random));

  // Optionally populate the product data to have sale price
  if (isSaleData) {
    product.sale_price = (Math.random() * product.price).toFixed(2)
  }

  return product
}

const getStarterData = (options: any) => {
  const {
    isListData,
    optionalDepartmentId,
    demoProductId,
    isSaleData,
  } = options

  // If given a single productId, return that data
  if (demoProductId && !isListData) {
    const demoProductIndex = demoProducts.findIndex(({ id }) => id === demoProductId)
    return demoProductIndex !== -1 ? demoProducts[demoProductIndex] : null
  }
  // If rendering a multiple products, return a list of demo products
  if (isListData) {
    return extractDemoProductList(demoProducts, optionalDepartmentId, isSaleData)
  }

  // Default to one random product
  return extractDemoProduct(demoProducts, isSaleData)
}

export default getStarterData