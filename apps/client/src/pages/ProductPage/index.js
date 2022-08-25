import React from 'react';
import PageElement from '../../components/PageElement';
import { useParams } from "react-router-dom";
import useDataLoadHandler from '../../hooks/useDataLoadHandler';
import useHandleProductState from '../../hooks/useHandleProductState';
import * as products from '../../api/products';

// should take productId from URL parameters
// should render product title, price, description
// should render product image
// should render product rating details
// should render add to cart button
// should render product category with link to department
const ProductPage = () => {
  const { productId } = useParams();

  // Return a return a promise
  const refreshFetch = ({ useDemoData }) => {
    if (useDemoData) {
      return setProductData(getStarterData(isListData, useDemoData, optionalDepartmentId, demoProductId, isSaleData))
    }
    return products.fetchProductDataById(productId)
  }

  const ProductState = useHandleProductState(ProductPageView, { productId, fetchFunction: refreshFetch });
  const ProductDataLoader = useDataLoadHandler(ProductState.Component, ProductState.fetchFunction, ProductState.options)

  return (
    <PageElement maxWidth="md">
      <ProductDataLoader />
    </PageElement >
  );
}

export default ProductPage;
