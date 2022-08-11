import { useState, useEffect } from "react";
import { useDemoSettings } from '../../context/DemoSettingsContext';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import demoProducts from './demoProducts.json'

const getStarterData = (isListData, useDemoData) => {
  if (useDemoData) { 
    return isListData ? demoProducts[Math.floor(Math.random()*demoProducts.length)] : demoProducts
  }
  return null
}

const ProductComponent = ({ isListData }) => (
  <>
    {isListData ? (
      <ProductList products={productData}/>
    ) : (
      <ProductCard product={productData}/>
    )}
  </>
)

const ProductDataLoader = ({ isListData, fetchProductData}) => {
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

  if (useDemoData) {
    return <ProductComponent isListData={isListData} />
  }
  
  if (apiRunning) {
    return (<>
      {loading ? (
        <CircularProgress />
      ) : (
        <ProductComponent isListData={isListData} />
      )}
      </>)
  } else {
    return (
      <Alert severity="warning">
        <Typography>Failed to load product</Typography>
      </Alert>
    )
  }
};

export default ProductDataLoader;
