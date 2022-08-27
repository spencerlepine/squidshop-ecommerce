import React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import SearchableList from './SearchableList';

const ProductList = ({ data: products, inSearchMode }) => {
  return (
    <div className="productList" component="main" sx={{ mt: 8, mb: 2 }}>
      {products && products.length === 0 && (
        <Alert severity="warning">
          <Typography>No products found</Typography>
        </Alert>
      )}

      <SearchableList products={products || []} inSearchMode={inSearchMode} />
    </div>
  );
}

export default ProductList;
