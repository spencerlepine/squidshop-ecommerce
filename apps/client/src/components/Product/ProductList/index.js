import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import ProductCard from '../ProductCard';

const scrollGridStyles = {
  maxHeight: 350,
  overflowX: "scroll",
  overflowY: "hidden"
}

const ProductList = ({ products, isSingleRowList }) => {
  const productsValid = products && products.length > 0;

  const NoneMessage = () => (
    <Alert severity="warning">
      <Typography>No products found</Typography>
    </Alert>
  )

  const RowList = () => (
    <Grid sx={scrollGridStyles} container wrap='nowrap' spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 18 }}>
      {productsValid && (
        <>
          {products.map((product, i) => (
            <Grid item xs={2} sm={4} md={6} key={i}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  )

  const GridList = () => (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 18 }}>
      {productsValid && (
        <>
          {products.map((product, i) => (
            <Grid item xs={2} sm={4} md={6} key={i}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  )

  return (
    <div component="main" sx={{ mt: 8, mb: 2 }}>
      {products && products.length === 0 && (
        <NoneMessage />
      )}

      {isSingleRowList ? (
        <RowList />
      ) : (
        <GridList />
      )}
    </div>
  );
}

export default ProductList;
