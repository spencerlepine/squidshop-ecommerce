import { useState, useEffect } from "react";
import useDemoSettings from '../../../context/DemoSettingsContext';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import demoProducts from './demoProducts.json'
import ProductList from '../ProductList';
import ProductCard from '../ProductCard';
import ProductPageView from '../PageView';

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

const ProductComponent = ({ isListData, productData, isSingleRowList, inSearchMode, isPageView }) => {
  if (isPageView) {
    return <ProductPageView product={productData || {}} />
  }

  if (isListData) {
    return <ProductList products={productData || {}} isSingleRowList={isSingleRowList} inSearchMode={inSearchMode} />
  }

  return <ProductCard product={productData || {}} />
}

const ProductDataLoader = (props) => {
  const {
    isListData,
    fetchProductData,
    // isSingleRowList, // optional
    optionalDepartmentId, // optional
    // inSearchMode, // optional
    // isPageView, // optional
  } = props

  const { useDemoData, apiRunning } = useDemoSettings()

  const [loading, isLoading] = useState(!useDemoData);
  const [productData, setProductData] = useState(getStarterData(isListData, useDemoData, optionalDepartmentId))

  useEffect(() => {
    if (!productData && apiRunning) {
      fetchProductData()
        .then((data) => {
          setProductData(data)
        })
        .catch(() => { })
        .then(() => isLoading(false));
    }
  }, [apiRunning]);

  useEffect(() => {
    if (useDemoData) {
      setProductData(getStarterData(isListData, useDemoData, optionalDepartmentId))
    }
  }, [useDemoData]);

  if (useDemoData) {
    return <ProductComponent {...props} productData={productData} />
  }

  if (apiRunning) {
    return (<>
      {loading ? (
        <CircularProgress />
      ) : (
        <ProductComponent {...props} productData={productData} />
      )}
    </>)
  } else {
    return (
      <Alert severity="warning" style={{ marginTop: '2em' }}>
        <Typography>Failed to load</Typography>
      </Alert>
    )
  }
};

export default ProductDataLoader;
