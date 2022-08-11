import React from "react";
import ProductDataLoader from '../../DataLoader';
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import * as products from '../../../../api/products';

const RelatedProducts = ({ product }) => {
  const fetchProductData = (cb) => {
    return products.fetchRelatedProducts(product.id, cb)
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography gutterBottom variant="h6" component="div" style={{ color: 'rgb(204, 102, 0)' }}>
        Related Products
      </Typography>

      <ProductDataLoader
        isListData
        isSingleRowList
        fetchProductData={fetchProductData}
      />
    </Box>
  )
}

export default RelatedProducts
