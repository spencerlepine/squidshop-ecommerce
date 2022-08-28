
import PageElement from 'layout/PageElement';
import { useParams } from "react-router-dom";
import useDataLoadHandler from 'hooks/useDataLoadHandler';
import useHandleProductState from 'hooks/useHandleProductState';
import * as products from 'api//products';
import getStarterDemoData from 'hooks/getStarterDemoData';
import ProductPageView from 'components/Product/PageView';

// should take productId from URL parameters
// should render product title, price, description
// should render product image
// should render product rating details
// should render add to cart button
// should render product category with link to department
const ProductPage = () => {
  const { productId } = useParams();

  // Return a return a promise
  const refreshFetch = (options: any) => {
    if (options.useDemoData) {
      const demoDataOptions = {
        isListData: false,
        // optionalDepartmentId: null,
        demoProductId: productId,
        isSaleData: false,
      }
      const demoProduct = getStarterDemoData(demoDataOptions)
      return () => new Promise((resolve) => resolve(demoProduct))
    }
    return () => products.fetchProductDataById(productId || '')
  }

  const ProductState = useHandleProductState(ProductPageView, { productId, fetchFunction: refreshFetch });
  const ProductDataLoader = useDataLoadHandler(ProductState.Component, ProductState.fetchFunction, ProductState.options)

  return (
    <PageElement maxWidth="md">
      <ProductDataLoader />
    </PageElement >
  );
}

export default ProductPage;
