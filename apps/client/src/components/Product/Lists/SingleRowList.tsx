import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../ProductCard';

const scrollGridStyles = {
  maxHeight: 350,
  overflowX: "scroll",
  overflowY: "hidden"
}

type Props = {
  products: Array<any>;
}

const SingleRowList: React.FC<Props> = ({ products }) => {
  const CardList = () => (
    <>
      {(Array.isArray(products) ? products : []).map((product, i) => (
        <Grid item xs={2} sm={4} md={6} key={i}>
          <ProductCard product={product} useMinimumDetails />
        </Grid>
      ))}
    </>
  );

  return (
    <Grid sx={scrollGridStyles} container wrap='nowrap' spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 18 }}>
      <CardList />
    </Grid>
  );
}

SingleRowList.defaultProps = {
  products: [],
}

export default SingleRowList;
