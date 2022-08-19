import React from 'react';
import ProductDataLoader from '../../components/Product/DataLoader';
import { Container } from '@mui/system';
import { useParams } from "react-router-dom";
import * as products from '../../api/products';

// should take productId from URL parameters
// should render product title, price, description
// should render product image
// should render product rating details
// should render add to cart button
// should render product category with link to department
const ProductPage = () => {
  const { productId } = useParams();

  const fetchProductData = () => {
    return products.fetchProductDataById(productId)
  };

  return (
    <Container component="main" maxWidth="md">
      <ProductDataLoader isPageView fetchProductData={fetchProductData} />
    </Container >
  );
}

export default ProductPage;
