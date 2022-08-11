import * as React from 'react';
import {
  Typography,
  Link,
} from "@material-ui/core";
import * as products from '../../api/products';
import ProductDataLoader from '../Product/DataLoader'

// should display catalog title
// should display product cards with images
// should display on-sale products TODO
// should be vertically scrollable grid with many products
// should take search from query parameter and load products TODO
// should render search bar if mobile TODO
const CatalogView = () => {
  return (
    <div className="CatalogView">
      <Typography variant="h4" component="h1" style={{ margin: '1em auto', textAlign: 'center' }} role="heading">
        Catalog
      </Typography>

      <ProductDataLoader isListData fetchProductData={products.fetchAllProducts} />
    </div>
  );
}

export default CatalogView;
