import * as React from 'react';
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import * as products from '../../../api/products';
import ProductDataLoader from '../../Product/DataLoader';

const DepartmentView = ({ departmentId }) => {
  const departmentName = departmentId[0].toUpperCase() + departmentId.substring(1, departmentId.length)

  const fetchProductData = (cb) => {
    return products.fetchDepartmentProducts(departmentId, cb)
  }

  const SaleProducts = () => (
    <Box sx={{ mb: 6 }}>
      <Typography gutterBottom variant="h5" component="div">
        Deals
      </Typography>

      <ProductDataLoader isListData isSingleRowList fetchProductData={products.fetchAllProducts} />
    </Box>
  )

  return (
    <div className="CatalogView">
      <Typography variant="h4" component="h1" style={{ margin: '1em auto', textAlign: 'center' }} role="heading">
        {departmentName}
      </Typography>

      <SaleProducts />

      <Typography gutterBottom variant="h5" component="div">
        Featured
      </Typography>

      <ProductDataLoader isListData fetchProductData={fetchProductData} />
    </div>
  );
}

export default DepartmentView;
