import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';

const Catalog = ({ products, useDemoData }) => {
  const NoneMessage = () => (
    <>
      <Alert severity="warning">
        <Typography>No products found</Typography>
      </Alert>
      <Button variant="contained" color="success" size="large" sx={{ mt: 4, mb: 2 }} onClick={() => useDemoData()}>
        Use Demo Catalog
      </Button>
    </>
  )

  return (
    <div component="main" sx={{ mt: 8, mb: 2 }}>
      {products && products.length === 0 && (
        <NoneMessage />
      )}

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 18 }}>
        {products && products.length > 0 && (
          <>
            {products.map((product, i) => (
              <Grid item xs={2} sm={4} md={6} key={i}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </div >);
}

export default Catalog;
