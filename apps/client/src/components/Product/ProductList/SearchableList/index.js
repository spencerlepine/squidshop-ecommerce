import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../../ProductCard';
import FilterOptions from './FilterOptions';

const SearchableList = ({ products, inSearchMode }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("SORT BY");
  const [orderOption, setOrderOption] = useState("ASC");

  return (
    <>
      <FilterOptions
        sortOption={sortOption}
        orderOption={orderOption}
        setOrderOption={setOrderOption}
        setSortOption={setSortOption}
        inSearchMode={inSearchMode}
        setFilteredProducts={setFilteredProducts}
      />

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 18 }} style={{ margin: '1em auto' }}>
        {(filteredProducts && filteredProducts.length > 0) && (
          <>
            {filteredProducts.map((product, i) => (
              <Grid item xs={2} sm={4} md={6} key={i} style={{ paddingLeft: 0 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
}

export default SearchableList;
