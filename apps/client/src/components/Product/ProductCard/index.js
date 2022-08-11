import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import missingImage from '../../../assets/placeholder.jpeg'

const toTitleCase = (str) => {
  return str[0].toUpperCase() + str.substring(1, str.length)
}

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image || missingImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {toTitleCase(product.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
