import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import missingImage from '../../../assets/placeholder.jpeg'

const toTitleCase = (str) => {
  return str[0].toUpperCase() + str.substring(1, str.length)
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
      {`$${originalPriceStr}`}
    </Typography>
  )
}

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 322 }} style={{ margin: 'auto', position: 'relative' }}>
      <Typography variant="caption" style={saleStyles}>Limited time deal</Typography>

      <CardMedia
        component="img"
        alt="green iguana"
        height="188"
        image={product.image || missingImage}
      />
      <CardContent style={{ position: 'relative' }}>
        <Typography gutterBottom variant="body4" component="div">
          {toTitleCase(product.title)}
        </Typography>

        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
          style={{ display: 'table' }}
        >
          <Rating name="read-only" value={product.rating_rate} readOnly />
          <Typography variant="body4" component="text.secondary" style={{ display: 'table-cell', 'vertical-align': 'middle', paddingLeft: '0.25em' }}>
            {`${product.rating_count}`}
          </Typography>
        </Box>

        <ProductPrice price={product.price} salePrice={product.sale_price} />

        <Button size="small" style={{ position: 'absolute', right: '1em', bottom: '1em' }}>Add to Cart</Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
