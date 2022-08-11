import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import ProductCard from '../ProductCard';

const ProductList = ({ products }) => {
  const NoneMessage = () => (
      <Alert severity="warning">
        <Typography>No products found</Typography>
      </Alert>
  )

  return (
    <div component="main" sx={{ mt: 8, mb: 2 }}>
      {products && products.length === 0 && (
        <NoneMessage />
      )}

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 18 }}>
        {products && products.length > 0 && (
          <>
            {products.map((product, i) => (
              <Grid item xs={2} sm={4} md={6} key={i}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </div>
  );
}

export default ProductList;
