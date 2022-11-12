import * as React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import SearchableList from './SearchableList/SearchableList';

type Props = {
  data?: any;
  isSearchMode: boolean;
}

const ProductList: React.FC<Props> = ({ data: products, isSearchMode }) => {
  return (
    <div className="productList">
      {products && products.length === 0 && (
        <Alert severity="warning">
          <Typography>No products found</Typography>
        </Alert>
      )}

      <SearchableList products={products || []} isSearchMode={isSearchMode} />
    </div>
  );
}

export default ProductList;
