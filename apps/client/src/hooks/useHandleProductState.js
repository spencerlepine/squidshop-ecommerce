import React, { useEffect } from 'react';
import useDemoSettings from '../context/DemoSettingsContext';

const useHandleProductState = (Component, options) => {
  const { productId, fetchFunction } = options;
  const { useDemoData } = useDemoSettings();

  const fetchProductData = () => {
    // Call the parent function and specify if it is demo data
    // It will provide API call or demo function
    if (useDemoData) {
      return fetchFunction({ useDemoData: true })
    }
    return fetchFunction({ useDemoData: false })
  }

  useEffect(() => {
    fetchProductData()
  }, []);

  return {
    Component: Component,
    fetchFunction: fetchProductData(),
    options: { productId }
  }
}

export default useHandleProductState;
