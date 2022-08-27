import * as React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import SearchableList from './SearchableList/SearchableList';

type Props = {
  data?: any;
  inSearchMode?: any;
}

const ProductList: React.FC<Props> = ({ data: products, inSearchMode }) => {
  return (
    <div className="productList">
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
