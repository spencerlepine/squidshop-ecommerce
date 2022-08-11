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

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 322 }} style={{ margin: 'auto' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="188"
        image={product.image || missingImage}
      />
      <CardContent>
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

        <Typography gutterBottom variant="h6" component="div">
          {`$${Number.parseFloat(product.price).toFixed(2).toString()}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
