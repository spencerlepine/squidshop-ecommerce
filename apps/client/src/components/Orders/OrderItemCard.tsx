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


type PriceProps = {
  price: string;
}

const ProductPrice: React.FC<PriceProps> = ({ price }) => {
  const originalPriceStr = Number.parseFloat(price).toFixed(2).toString()

  return (
    <Typography gutterBottom variant="body1" component="div">
      {`$${originalPriceStr}`}
    </Typography>
  )
}

type Props = {
  order: any;
}
const OrderItemCard: React.FC<Props> = ({ order }) => {
  const ProductImage = (props: any) => {
    return (
      <ImageList sx={{ width: 100, height: 100 }} cols={1} rowHeight={100} >
        <ImageListItem>
          <img
            src={props.product.image}
            srcSet={props.product.image}
            alt={props.product.title}
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
              <Typography variant="body1" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                Order ID: <span style={{ fontWeight: 400, color: '#323232' }}>#{order.id}</span>
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="body1" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                Total: <span style={{ fontWeight: 400, color: '#ac6f00' }}>${order.orderTotal}</span>
              </Typography>
            </Grid>

            <Grid item xs={9}>
              <Typography variant="body1" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                Address: <span style={{ fontWeight: 400, color: '#323232' }}>{order.orderAddress}</span>
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="body1" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading">
                Date: <span style={{ fontWeight: 400, color: '#323232' }}>{order.purchaseDate}</span>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Grid container spacing={2}>
            {(items && items.length > 0) && items.map((cartItem: any, i: number) => (
              <Grid container spacing={2} key={i}>
                <Grid item xs={2}>
                  <ProductImage product={cartItem} />
                </Grid>

                <Grid item xs={4}>
                  <Link to={`/product/${cartItem.productId || 'unkown'}`} component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Typography variant="body1" component="p" style={{ fontWeight: 500, display: 'inline' }} role="heading" className="productTitle">
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

OrderItemCard.defaultProps = {
  order: {}
}

export default OrderItemCard;
