import demoProducts from './demoProducts.json'

const extractDemoProductList = (list, optionalDepartmentId, isSaleData) => {
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

  return list.slice(0, 20)
}

const extractDemoProduct = (list, isSaleData) => {

  const random = demoProducts[Math.floor(Math.random() * demoProducts.length)]
  const product = JSON.parse(JSON.stringify(random));

  // Optionally populate the product data to have sale price
  if (isSaleData) {
    product.sale_price = (Math.random() * product.price).toFixed(2)
  }

  return product
}


const getStarterData = (isListData, useDemoData, optionalDepartmentId, demoProductId, isSaleData) => {
  // If in production mode, do not use demo products
  if (!useDemoData) {
    return null
  }

  // If given a single productId, return that data
  if (demoProductId) {
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