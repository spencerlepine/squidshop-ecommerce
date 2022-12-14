import * as React from 'react';
import { Grid } from '@mui/material/';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

type PriceProps = {
  price: string;
  salePrice?: string;
}

const ProductPrice: React.FC<PriceProps> = ({ price, salePrice }) => {
  const finalPrice = salePrice || price
  const originalPriceStr = Number.parseFloat(finalPrice).toFixed(2).toString()

  return (
    <Typography gutterBottom variant="h6" component="div">
      {`$${originalPriceStr}`}
    </Typography>
  )
}

type Props = {
  product: any;
  removeFromCart: Function;
}
const CartItemCard: React.FC<Props> = ({ product, removeFromCart }) => {
  const category = product.category || 'unknown'
  const departmentName = category[0].toUpperCase() + category.substring(1, category.length)

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
    </>
  )

  const RemoveFromCartBtn = () => {
    const deleteButtonStyles = {
      position: 'absolute',
      // top: 0,
      right: 0,
      top: '20%'
    }  as React.CSSProperties;

    return (
      <Button variant="contained" color="error" size="small" style={deleteButtonStyles} onClick={() => removeFromCart()} className="removeBtn">
        <DeleteIcon />
      </Button>
    )
  }
  const ProductImage = () => {
    return (
      <ImageList sx={{ width: 100, height: 100 }} cols={1} rowHeight={100}>
        <ImageListItem>
          <img
            src={product.image}
            srcSet={product.image}
            alt={product.title}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    )
  }

  const productPageLink = `/product/${product.productId || product.id || 'unkown'}`

  return (
    <>
      <hr style={{ color: '#e5e5e5' }} />
      <Box sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
        <Grid container spacing={2} >
          <Grid item xs={2} style={{ margin: 'auto' }}>
            <Link to={productPageLink} component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <ProductImage />
            </Link>
          </Grid>
          <Grid item xs={6} style={{ position: 'relative', margin: 'auto' }}>
            <Link to={productPageLink} component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <ProductDetails />
            </Link>
            <RemoveFromCartBtn />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

CartItemCard.defaultProps = {
  product: {},
  removeFromCart: () => { },
}

export default CartItemCard;
