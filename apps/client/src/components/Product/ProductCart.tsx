import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import AddToCartButton from '../../Cart/AddButton';
import missingImage from '../../../assets/placeholder.jpeg'

const toTitleCase = (str) => {
  return str[0].toUpperCase() + str.substring(1, str.length)
}

const formatProductTitle = (str) => {
  const capitalized = toTitleCase(str)

  if (capitalized.length > 52) {
    return `${capitalized.substring(0, 52)}...`
  }
  return capitalized
}

const saleStyles = {
  position: 'absolute',
  left: '1em',
  top: '1em',
  backgroundColor: 'rgb(177, 39, 4)',
  color: 'white',
  padding: '0.25em 0.5em',
  fontWeight: 'bold'
}

const ProductPrice = ({ price, salePrice }) => {
  const originalPriceStr = Number.parseFloat(price).toFixed(2).toString()

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
      <strong>{`$${originalPriceStr}`}</strong>
    </Typography>
  )
}

const CardStyles = {
  maxWidth: 300,
  maxHeight: '25em',
  minWidth: 200,
  margin: 'auto',
  position: 'relative',
  border: 'none',
}

const ProductCard = ({ product, useMinimumDetails }) => {
  return (
    <Link to={`/product/${product.id || 'unkown'}`} component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <Card style={CardStyles}>
        {!!product.sale_price && <Typography variant="caption" style={saleStyles}>ON SALE</Typography>}

        <img
          alt={product.title}
          src={product.image}
          // height="188"
          style={{ width: '17rem', height: '17rem', margin: 'auto' }}
          image={product.image || missingImage}
        />

        <CardContent style={{ position: 'relative' }}>
          <Typography gutterBottom variant="body2" component="div">
            {formatProductTitle(product.title)}
          </Typography>

          {!useMinimumDetails && (
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
              style={{ display: 'table' }}
            >
              <Rating name="size-small" value={product.rating_rate} readOnly size="small" />
              <Typography variant="body1" component="p" style={{ display: 'table-cell', verticalAlign: 'middle', paddingLeft: '0.25em' }}>
                {`${product.rating_count}`}
              </Typography>
            </Box>
          )}

          <ProductPrice price={product.price} salePrice={product.sale_price} />
        </CardContent>
      </Card>
    </Link>
  );
}

ProductCard.defaultProps = {
  product: {
    title: 'Unknown',
  }
};

export default ProductCard;
