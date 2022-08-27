import * as React from 'react';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Typography, Button } from '@mui/material/';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import RelatedProducts from './RelatedProducts';

const ProductPageView = ({ data: product }) => {
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Link to="/catalog" component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Button>All Departments</Button>
        </Link>
        <Link to={`/department/${product.category}`} component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Button>{'<'} {product.category}</Button>
        </Link>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ProductImage product={product} />
          </Grid>
          <Grid item xs={6}>
            <ProductDetails product={product} />
          </Grid>
          <Grid item xs={12}>
            <RelatedProducts product={product} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

ProductPageView.defaultProps = {
  product: {
    category: 'unknown',
    description: 'missing',
    price: 0,
    image: '',
    title: '',
  }
};

export default ProductPageView
