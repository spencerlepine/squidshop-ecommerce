import React from "react";
import useDataLoadHandler from '../../../../hooks/useDataLoadHandler';
import useHandleProductState from '../../../../hooks/useHandleProductState';
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import * as products from '../../../../api/products';
import ProductHoriList from '../../ProductHoriList'
import getStarterDemoData from '../../../../hooks/getStarterDemoData';

const RelatedProducts = ({ product }) => {
  const relatedFetch = ({ useDemoData }) => {
    if (useDemoData) {
      const demoDataOptions = {
        isListData: true,
        optionalDepartmentId: product.category,
        demoProductId: product.id,
        isSaleData: false,
      }
      const demoProduct = getStarterDemoData(demoDataOptions)
      return () => new Promise((resolve) => resolve(demoProduct))
    }

    return () => products.fetchRelatedProducts(product.id)
  }

  const ProductState = useHandleProductState(ProductHoriList, { productId: product.id, fetchFunction: relatedFetch });
  const ProductDataLoader = useDataLoadHandler(ProductState.Component, ProductState.fetchFunction, ProductState.options)

  return (
    <Box sx={{ mt: 2 }} className="relatedProducts">
      <Typography gutterBottom variant="h6" component="div" style={{ color: 'rgb(204, 102, 0)' }}>
        Related Products
      </Typography>

      <ProductDataLoader />
    </Box>
  )
}

RelatedProducts.defaultProps = {
  product: {}
}

export default RelatedProducts
