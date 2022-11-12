import * as React from 'react';
import {
  Typography,
} from "@material-ui/core";
import Box from '@mui/material/Box';
import * as products from 'api/products';
import useDataLoadHandler from 'hooks/useDataLoadHandler';
import useHandleProductState from 'hooks/useHandleProductState';
import MobileEnabledSearchBar from './MobileSearchBar';
import ProductList from 'components/Product/Lists/ProductList';
import getStarterDemoData from 'hooks/getStarterDemoData';

// should display catalog title
// should display product cards with images
// should display on-sale products
// should be vertically scrollable grid with many products
// should handle search mode and render sorting options
// should take search from query parameter and load products
// should render search bar if mobile

type Props = {
  currentQuery?: string | undefined;
  hideTitle?: boolean | undefined;
}

const CatalogView: React.FC<Props> = ({ currentQuery, hideTitle }) => {
  // Return a return a promise
  const queryFetch = (options: any) => {
    const { useDemoData } = options
    if (useDemoData) {
      const demoDataOptions = {
        isListData: true,
        // optionalDepartmentId: null,
        // demoProductId: null,
        isSaleData: false,
      }
      const demoProduct = getStarterDemoData(demoDataOptions)
      return () => new Promise((resolve) => resolve(demoProduct))
    }

    return currentQuery ? () => products.fetchSearchProducts(currentQuery) : () => products.fetchCatalogProducts()
  }

  const ProductState = useHandleProductState(ProductList, { fetchFunction: queryFetch, isSearchMode: !!currentQuery  });
  const ProductDataLoader = useDataLoadHandler(ProductState.Component, ProductState.fetchFunction, ProductState.options)

  return (
    <Box className="CatalogView">
      <MobileEnabledSearchBar customStyles={{ width: '90%', margin: '1em auto' }} />

      <br />

      {!hideTitle && (
        <Typography variant="h4" component="h1" style={{ margin: '1em auto', textAlign: 'center' }} role="heading">
          Catalog
        </Typography>
      )}

      <ProductDataLoader />
    </Box>
  );
}

export default CatalogView;
