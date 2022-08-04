// import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import * as products from '../../api/products';
import * as status from '../../api/status';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Catalog from './Catalog';
import demoProducts from './demoProducts.json'

const Products = () => {
  const [useDemoData, setUseDemoData] = useState(false)
  const [loading, setLoading] = useState(true)
  const [allProducts, setAllProducts] = useState([])
  const [apiRunning, setApiRunning] = useState(false)

  useEffect(() => {
    status.fetchApiStatus((isRunning, error) => {
      setApiRunning(isRunning)
      setLoading(false)
    })
  }, [setApiRunning])

  useEffect(() => {
    if (apiRunning) {
      products.fetchAllProducts((productData) => {
        setAllProducts(productData)
      })
    }
  }, [apiRunning])

  const ApiBrokenMessage = () => (
    <>
      <Alert severity="error">
        <Typography>Unable to connect to the backend</Typography>
      </Alert>
      <Button variant="contained" color="success" size="large" sx={{ mt: 4, mb: 2 }} onClick={() => setUseDemoData(true)}>
        Use Demo Catalog
      </Button>
    </>
  )

  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">

      <Typography variant="h2" component="h1" gutterBottom>
        Products
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
        {'Browse the catalog'}
      </Typography>

      {useDemoData ? (
        <Catalog products={demoProducts.products} />
      ) : (
        <>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {apiRunning ? (
                <Catalog products={allProducts} useDemoData={() => setUseDemoData(true)} />
              ) : (
                <ApiBrokenMessage />
              )}
            </>
          )}
        </>
      )}
    </Container >);
}

export default Products;
