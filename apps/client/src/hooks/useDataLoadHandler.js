import React, { useState, useEffect } from 'react';
import LoadingStatusWrapper from '../components/LoadingStatusWrapper';
import useDemoSettings from '../context/DemoSettingsContext';

// import ProductList from '../../components/Product/ProductList';
// import ProductCard from '../../components/Product/ProductCard';
// const loadList = () => getProductById("123") // promise
// const ProductsList = handleProductData(loadList, {
//   renderAsList: true,
//   showRating: true
//   optDepartmentId: null
//   optDemoProductId: null
// });
// return (
//   {Products}
// )
// should accept a fetch function to get the product data
// should accept options:
//     is it a list?
//     does it show the rating?

// const ProductDisplay = () => {
//   if (renderAsList) {
//     return <ProductList products={productData || []} />
//   }

//   return <ProductCard product={productData} />
// }


// const Products = dataLoadingHandler(ProductCard, () => loadProductById("123"))
const dataLoadingHandler = (Component, fetchFunction, customProps = {}) =>
  () => {
    const { apiRunning } = useDemoSettings()
    const [dataForChild, setDataForChild] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleRefresh = () => {
      setIsError(false);
      setLoading(true);
      fetchFunction()
        .then((data) => setDataForChild(data))
        .catch(() => setIsError(true))
        .then(() => setLoading(false))
    }

    useEffect(() => {
      if (process.env.NODE_ENV !== 'test') {
        handleRefresh()
      }
    }, [])

    const loadingStatusProps = {
      loading,
      isError,
      apiRunning,
      handleRefresh,
      dataForChild
    }

    return (
      <LoadingStatusWrapper {...loadingStatusProps}>
        <Component data={dataForChild} {...customProps} />
      </LoadingStatusWrapper>
    )
  };

export default dataLoadingHandler;