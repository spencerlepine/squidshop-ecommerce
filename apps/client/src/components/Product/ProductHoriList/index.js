import React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import SingleRowList from './SingleRowList';

const ProductHoriList = ({ data: products }) => {
  return (
    <div component="main" sx={{ mt: 8, mb: 2 }}>
      {products && products.length === 0 && (
        <Alert severity="warning">
          <Typography>No products found</Typography>
        </Alert>
      )}

      <SingleRowList products={products || []} />
    </div>
  );
}

export default ProductHoriList;
