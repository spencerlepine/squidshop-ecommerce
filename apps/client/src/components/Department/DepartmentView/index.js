import * as React from 'react';
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import * as products from '../../../api/products';
import ProductDataLoader from '../../Product/DataLoader';

const SaleProducts = ({ departmentId }) => {
  const fetchSaleProducts = (cb) => {
    return products.fetchDepartmentSaleProducts(departmentId, cb)
  }

  return (
    <Box sx={{ mb: 6 }}>
      <Typography gutterBottom variant="h5" component="div">
        Deals
      </Typography>

      <ProductDataLoader isListData isSingleRowList fetchProductData={fetchSaleProducts} optionalDepartmentId={departmentId} />
    </Box>
  )
}

const DepartmentCatalog = ({ departmentId }) => {
  const fetchDepartmentProducts = (cb) => {
    return products.fetchDepartmentProducts(departmentId, cb)
  }

  return (
    <Box sx={{ mb: 6 }}>
      <Typography gutterBottom variant="h5" component="div">
        Featured
      </Typography>

      <ProductDataLoader isListData fetchProductData={fetchDepartmentProducts} optionalDepartmentId={departmentId} />
    </Box>
  )
}

const DepartmentView = ({ departmentId }) => {
  const id = departmentId || ''
  const departmentName = id.toUpperCase() + id.substring(1, id.length)

  return (
    <div className="CatalogView">
      <Typography variant="h4" component="h1" style={{ margin: '1em auto', textAlign: 'center' }} role="heading">
        {departmentName}
      </Typography>

      <SaleProducts departmentId={departmentId} />

      <DepartmentCatalog departmentId={departmentId} />
    </div>
  );
}

export default DepartmentView;
