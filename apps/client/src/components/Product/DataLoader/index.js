import { useState, useEffect } from "react";
import useDemoSettings from '../../../context/DemoSettingsContext';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import demoProducts from './demoProducts.json'
import ProductList from '../ProductList';
import ProductCard from '../ProductCard';

const getStarterData = (isListData, useDemoData) => {
  if (useDemoData) { 
    return isListData ? demoProducts.slice(0, 20) : demoProducts[Math.floor(Math.random()*demoProducts.length)]
  }
  return null
}

const ProductComponent = ({ isListData, productData }) => (
  <>
    {isListData ? (
      <ProductList products={productData || {}}/>
    ) : (
      <ProductCard product={productData || {}}/>
    )}
  </>
)

const ProductDataLoader = ({ isListData, fetchProductData }) => {
  const { useDemoData, apiRunning }  = useDemoSettings()

  const [loading, isLoading] = useState(!useDemoData);
  const [productData, setProductData] = useState(getStarterData(isListData, useDemoData))

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
      setProductData(getStarterData(isListData, useDemoData))
    }
  }, [useDemoData]);

  if (useDemoData) {
    return <ProductComponent isListData={isListData} productData={productData} />
  }
  
  if (apiRunning) {
    return (<>
      {loading ? (
        <CircularProgress />
      ) : (
        <ProductComponent isListData={isListData} productData={productData} />
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
