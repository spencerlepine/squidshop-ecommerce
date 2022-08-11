import * as React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import SearchableList from './SearchableList';
import SingleRowList from './SingleRowList';

const ProductList = ({ products, isSingleRowList, inSearchMode }) => {
  return (
    <div component="main" sx={{ mt: 8, mb: 2 }}>
      {products && products.length === 0 && (
        <Alert severity="warning">
          <Typography>No products found</Typography>
        </Alert>
      )}

      {isSingleRowList ? (
        <SingleRowList products={products} />
      ) : (
        <SearchableList products={products} inSearchMode={inSearchMode} />
      )}
    </div>
  );
}

export default ProductList;
