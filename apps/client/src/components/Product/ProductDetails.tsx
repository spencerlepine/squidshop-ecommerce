import * as React from 'react';
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AddToCartButton from 'components/Cart/AddButton';

type PriceProps = {
  price: string;
  salePrice: string | undefined;
}

const ProductPrice: React.FC<PriceProps> = ({ price, salePrice }) => {
  const originalPriceStr = Number.parseFloat(price || '').toFixed(2).toString()

  if (salePrice) {
    const salePriceStr = Number.parseFloat(salePrice).toFixed(2).toString()

    return (
      <div style={{ display: 'flex' }}>
        <Typography gutterBottom variant="h6" component="div">
          {`$${salePriceStr}`}
        </Typography>
        <Typography gutterBottom variant="body2" component="div" style={{ textDecoration: 'line-through', color: 'rgb(118, 118, 118)', margin: 'auto 0.25em' }}>
          {`$${originalPriceStr}`}
        </Typography>
      </div>
    )
  }

  return (
    <Typography gutterBottom variant="h6" component="div">
      {`$${originalPriceStr}`}
    </Typography>
  )
}

type DetailsProps = {
  product: any;
}
// should handle sale price styling
const ProductDetails: React.FC<DetailsProps> = ({ product }) => {
  const category = product.category || 'unknown'
  const departmentName = category[0].toUpperCase() + category.substring(1, category.length)
  const description = product.description || 'missing'

  const ProductDetails = () => (
    <>
      <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} role="heading" className="productTitle">
        {product.title}
      </Typography>
      <Typography variant="body1" component="p" style={{ fontWeight: 200 }}>
        {departmentName}
      </Typography>

      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
        style={{ display: 'table' }}
      >
        <Rating name="read-only" value={product.rating_rate} readOnly />
        <Typography variant="body1" component="p" style={{ display: 'table-cell', verticalAlign: 'middle', paddingLeft: '0.25em' }}>
          {`${product.rating_count}`}
        </Typography>
      </Box>

      <ProductPrice price={product.price} salePrice={product.salePrice} />

      <Typography variant="body1" component="p">
        {description.substring(0, 255)}
      </Typography>
    </>
  )
  return (
    <>
      <ProductDetails />

      <AddToCartButton productId={product.id} entireProduct={product} />
    </>
  )
}

ProductDetails.defaultProps = {
  product: {
    category: ''
  }
}
export default ProductDetails
