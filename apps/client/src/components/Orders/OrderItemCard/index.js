import * as React from 'react';
import { Grid } from '@mui/material/';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ProductPrice = ({ price }) => {
  const originalPriceStr = Number.parseFloat(price).toFixed(2).toString()

  return (
    <Typography gutterBottom variant="p" component="div">
      {`$${originalPriceStr}`}
    </Typography>
  )
}

const OrderItemCard = ({ order }) => {
  const category = order.category || 'unknown'

  const ProductImage = ({ product }) => {
    return (
      <ImageList sx={{ width: 100, height: 100 }} cols={1} rowHeight={100} >
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
  const items = order.cartItems

  return (
    <>
      <hr style={{ color: '#e5e5e5' }} />
      <Card variant="outlined" sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
        <CardContent>
          <Grid container spacing={2} style={{ backgroundColor: '#e1e1e1', padding: '1em' }}>
            <Grid item xs={9}>
              <Typography variant="p" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                Order ID: <span style={{ fontWeight: 400, color: '#323232' }}>#{order.id}</span>
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="p" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                Total: <span style={{ fontWeight: 400, color: '#ac6f00' }}>${order.orderTotal}</span>
              </Typography>
            </Grid>

            <Grid item xs={9}>
              <Typography variant="p" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                Address: <span style={{ fontWeight: 400, color: '#323232' }}>{order.orderAddress}</span>
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="p" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                Date: <span style={{ fontWeight: 400, color: '#323232' }}>{order.purchaseDate}</span>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Grid container spacing={2}>
            {items.map((cartItem) => (
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <ProductImage product={cartItem} />
                </Grid>

                <Grid item xs={4}>
                  <Link to={`/product/${cartItem.productId || 'unkown'}`} component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Typography variant="p" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                      {cartItem.title}
                    </Typography>

                    <ProductPrice price={cartItem.price} />
                  </Link>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default OrderItemCard;
