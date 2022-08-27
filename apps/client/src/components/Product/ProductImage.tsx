import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ProductImage = ({ product }) => {
  return (
    <ImageList sx={{ width: 300, height: 300 }} cols={1} rowHeight={300}>
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

ProductImage.defaultProps = {
  product: {
    image: '',
    title: '',
  }
};

export default ProductImage
