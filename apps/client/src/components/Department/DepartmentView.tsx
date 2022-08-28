import * as React from 'react';
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import * as products from 'api//products';
import useDataLoadHandler from 'hooks/useDataLoadHandler';
import useHandleProductState from 'hooks/useHandleProductState';
import ProductHoriList from '../Product/Lists/ProductHoriList';
import getStarterDemoData from 'hooks/getStarterDemoData';

type Props = {
  departmentId?: string;
}
const SaleProducts: React.FC<Props> = ({ departmentId }) => {
  // Return a return a promise
  const fetchSaleProducts = (options: any) => {
    if (options.useDemoData) {
      const demoDataOptions = {
        isListData: true,
        optionalDepartmentId: departmentId,
        demoProductId: null,
        isSaleData: true,
      }
      const demoProduct = getStarterDemoData(demoDataOptions)
      return () => new Promise((resolve) => resolve(demoProduct))
    }
    return () => products.fetchDepartmentSaleProducts(departmentId || '')
  }

  const ProductState = useHandleProductState(ProductHoriList, { fetchFunction: fetchSaleProducts });
  const ProductSaleLoader = useDataLoadHandler(ProductState.Component, ProductState.fetchFunction, ProductState.options)

  return (
    <Box sx={{ mb: 6 }}>
      <Typography gutterBottom variant="h5" component="div">
        Deals
      </Typography>

      <ProductSaleLoader />
    </Box>
  )
}

const DepartmentCatalog: React.FC<Props> = ({ departmentId }) => {

  // Return a return a promise
  const fetchDepartmentProducts = (options: any) => {
    if (options.useDemoData) {
      const demoDataOptions = {
        isListData: true,
        optionalDepartmentId: departmentId,
        demoProductId: null,
        isSaleData: false,
      }
      const demoProduct = getStarterDemoData(demoDataOptions)
      return () => new Promise((resolve) => resolve(demoProduct))
    }
    return () => products.fetchDepartmentProducts(departmentId || '')
  }

  const ProductState = useHandleProductState(ProductHoriList, { fetchFunction: fetchDepartmentProducts });
  const ProductDeptLoader = useDataLoadHandler(ProductState.Component, ProductState.fetchFunction, ProductState.options)

  return (
    <Box sx={{ mb: 6 }}>
      <Typography gutterBottom variant="h5" component="div">
        Featured
      </Typography>

      <ProductDeptLoader />
    </Box>
  )
}

const DepartmentView: React.FC<Props> = ({ departmentId }) => {
  const id = departmentId || ''
  const departmentName = id[0].toUpperCase() + id.substring(1, id.length)

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

DepartmentView.defaultProps = {
  departmentId: 'fakeDepartment'
}

export default DepartmentView;
