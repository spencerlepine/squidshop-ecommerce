import axios from 'axios'
import config from './config'
const PRODUCTS_API = `${config.REACT_GATEWAY_API_URL}/products`

export const fetchCatalogProducts = (callback) => {
  axios.get(`${PRODUCTS_API}/catalog`)
    .then((response) => {
      callback(response.data.products)
    })
}

export const fetchSearchProducts = (query, callback) => {
  axios.get(`${PRODUCTS_API}/catalog?query=${query}`)
    .then((response) => {
      callback(response.data.products)
    })
}

export const fetchDepartmentProducts = (departmentId, callback) => {
  axios.get(`${PRODUCTS_API}/department/${departmentId}`)
    .then((response) => {
      callback(response.data.products)
    })
}

export const fetchDepartmentSaleProducts = (departmentId, callback) => {
  axios.get(`${PRODUCTS_API}/department/sale/${departmentId}`)
    .then((response) => {
      callback(response.data.products)
    })
}

export const fetchProductDataById = (productId, callback) => {
  axios.get(`${PRODUCTS_API}/product/${productId}`)
    .then((response) => {
      callback(response.data)
    })
}

export const fetchRelatedProducts = (productId, callback) => {
  axios.get(`${PRODUCTS_API}/product/related/${productId}`)
    .then((response) => {
      callback(response.data.products)
    })
}