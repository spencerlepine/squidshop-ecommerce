import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CachedIcon from '@mui/icons-material/Cached';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../context/AuthContext';
import useDemoSettings from '../../context/DemoSettingsContext';
import useCart from '../../context/CartContext';
import CartItemCard from './CartItemCard';

const CartView = () => {
  const { currentUser } = useAuth();
  const { useDemoData } = useDemoSettings();
  const { cartItems, loading, loadUserCart } = useCart();

  const refreshCart = () => {
    if (useDemoData || (currentUser && currentUser.id)) {
      loadUserCart(currentUser.id)
    }
  }

  useEffect(() => {
    refreshCart()
  }, [])


  const EmptyMessage = () => (
    <Alert severity="warning" style={{ marginTop: '2em' }}>
      <Typography>Failed to load <Button style={{ marginLeft: '0.5em' }} onClick={refreshCart}><CachedIcon /> Refresh</Button></Typography>
    </Alert>
  )

  return (
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Typography variant="h4" component="h2">
        <ShoppingCartIcon /> Cart
      </Typography>

      <Box sx={{ textAlign: 'left', mt: 6 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {(cartItems && cartItems.length > 0) ? (
              cartItems.map((cartProduct) => (
                <CartItemCard product={cartProduct} />
              ))
            ) : (
              <EmptyMessage />
            )}
          </>
        )}
      </Box>
    </Box>)
}

export default CartView;
