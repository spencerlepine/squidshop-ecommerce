import { useState, useEffect } from "react";
import useDemoSettings from '../../../context/DemoSettingsContext';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import demoProducts from './demoProducts.json'
import ProductList from '../ProductList';
import ProductCard from '../ProductCard';

const getStarterData = (isListData, useDemoData, optionalDepartmentId) => {
  if (useDemoData) {
    let list = demoProducts.slice()

    if (optionalDepartmentId) {
      list = list = list.filter((product) => product.category === optionalDepartmentId)
    }

    if (isListData) {
      return list.slice(0, 20)
    }

    return list[Math.floor(Math.random() * list.length)]
  }
  return null
}

const ProductComponent = ({ isListData, productData, isSingleRowList }) => (
  <>
    {isListData ? (
      <ProductList products={productData || {}} isSingleRowList={isSingleRowList} />
    ) : (
      <ProductCard product={productData || {}} />
    )}
  </>
)

const ProductDataLoader = ({ isListData, fetchProductData, isSingleRowList, optionalDepartmentId }) => {
  const { useDemoData, apiRunning } = useDemoSettings()

  const [loading, isLoading] = useState(!useDemoData);
  const [productData, setProductData] = useState(getStarterData(isListData, useDemoData, optionalDepartmentId))

  useEffect(() => {
    if (!productData && apiRunning) {
      fetchProductData((data) => {
        isLoading(false)
        setProductData(data)
      });
    }
  }, [apiRunning]);

  useEffect(() => {
    if (useDemoData) {
      setProductData(getStarterData(isListData, useDemoData, optionalDepartmentId))
    }
  }, [useDemoData, optionalDepartmentId]);

  if (useDemoData) {
    return <ProductComponent isListData={isListData} isSingleRowList={isSingleRowList} productData={productData} />
  }

  if (apiRunning) {
    return (<>
      {loading ? (
        <CircularProgress />
      ) : (
        <ProductComponent isListData={isListData} isSingleRowList={isSingleRowList} productData={productData} />
      )}
    </>)
  } else {
    return (
      <Alert severity="warning">
        <Typography>Failed to load</Typography>
      </Alert>
    )
  }
};

export default ProductDataLoader;
