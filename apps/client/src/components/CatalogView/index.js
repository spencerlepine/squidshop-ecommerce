import * as React from 'react';
import {
  Typography,
} from "@material-ui/core";
import Box from '@mui/material/Box';
import * as products from '../../api/products';
import ProductDataLoader from '../Product/DataLoader'
import MobileEnabledSearchBar from '../SearchBar/MobileEnabled';

// should display catalog title
// should display product cards with images
// should display on-sale products
// should be vertically scrollable grid with many products
// should handle search mode and render sorting options
// should take search from query parameter and load products
// should render search bar if mobile
const CatalogView = ({ currentQuery, hideTitle }) => {
  const fetchByQuery = () => {
    return products.fetchSearchProducts(currentQuery)
  }

  return (
    <Box className="CatalogView">
      <MobileEnabledSearchBar customStyles={{ width: '90%', margin: '1em auto' }} />

      <br />

      {!hideTitle && (
        <Typography variant="h4" component="h1" style={{ margin: '1em auto', textAlign: 'center' }} role="heading">
          Catalog
        </Typography>
      )}

      <ProductDataLoader
        isListData
        fetchProductData={currentQuery ? fetchByQuery : products.fetchCatalogProducts}
        inSearchMode={currentQuery}
      />
    </Box>
  );
}

export default CatalogView;
