import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../../ProductCard';
import FilterOptions from './FilterOptions';

type Props = {
  products: any;
  isSearchMode: boolean;
}

const SearchableList: React.FC<Props> = ({ products, isSearchMode }) => {
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [sortOption, setSortOption] = React.useState("SORT BY");
  const [orderOption, setOrderOption] = React.useState("ASC");

  React.useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <>
      <FilterOptions
        sortOption={sortOption}
        orderOption={orderOption}
        setOrderOption={setOrderOption}
        setSortOption={setSortOption}
        isSearchMode={isSearchMode}
        setFilteredProducts={setFilteredProducts}
      />

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 18 }} style={{ margin: '1em auto' }}>
        {(filteredProducts && filteredProducts.length > 0) && (
          <>
            {filteredProducts.map((product: any, i: number) => (
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
