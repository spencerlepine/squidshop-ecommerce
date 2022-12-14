import axios from 'axios'
import config from '../config'
const PRODUCTS_API = `${config.REACT_APP_GATEWAY_API_URL}/products`

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true
};

export const fetchCatalogProducts = () => new Promise((resolve, reject) => {
  return axios.get(`${PRODUCTS_API}/catalog`, axiosConfig)
    .then((response) => {
      resolve(response.data.products)
    })
    .catch(reject)
})

export const fetchSearchProducts = (query: string) => new Promise((resolve, reject) => {
  return axios.get(`${PRODUCTS_API}/catalog?query=${query}`, axiosConfig)
    .then((response) => {
      resolve(response.data.products)
    })
    .catch(reject)
})

export const fetchDepartmentProducts = (departmentId: string) => new Promise((resolve, reject) => {
  return axios.get(`${PRODUCTS_API}/department/${departmentId}`, axiosConfig)
    .then((response) => {
      resolve(response.data.products)
    })
    .catch(reject)
})

export const fetchDepartmentSaleProducts = (departmentId: string) => new Promise((resolve, reject) => {
  return axios.get(`${PRODUCTS_API}/department/sale/${departmentId}`, axiosConfig)
    .then((response) => {
      resolve(response.data.products)
    })
    .catch(reject)
})

export const fetchProductDataById = (productId: string) => new Promise((resolve, reject) => {
  return axios.get(`${PRODUCTS_API}/product/${productId}`, axiosConfig)
    .then((response) => {
      resolve(response.data)
    })
    .catch(reject)
})

export const fetchRelatedProducts = (productId: string) => new Promise((resolve, reject) => {
  return axios.get(`${PRODUCTS_API}/product/related/${productId}`, axiosConfig)
    .then((response) => {
      resolve(response.data.products)
    })
    .catch(reject)
})