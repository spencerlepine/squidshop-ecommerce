import * as React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import SingleRowList from './SingleRowList';

type Props = {
  data: any;
}

const ProductHoriList: React.FC<Props> = ({ data: products }) => {
  return (
    <div>
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
