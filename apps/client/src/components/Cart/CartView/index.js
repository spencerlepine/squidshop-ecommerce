import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CachedIcon from '@mui/icons-material/Cached';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../context/AuthContext';
import useDemoSettings from '../../../context/DemoSettingsContext';
import useCart from '../../../context/CartContext';
import useOrders from '../../../context/OrdersContext';
import CartItemCard from '../CartItemCard';

const CartView = () => {
  const { currentUser } = useAuth();
  const { addDemoOrder } = useOrders(); // for demo purposes
  const { useDemoData } = useDemoSettings();
  const { cartItems, loading, loadUserCart, useDemoCart, handleCheckout, removeFromCart } = useCart();

  const getCartTotalSum = () => {
    try {
      const sum = cartItems.reduce((sum, p) => sum += p.price, 0)
      return sum.toFixed(2)
    } catch (e) {
      return 0
    }
  }

  const checkoutAction = () => {
    if (useDemoData) {
      handleCheckout('', { isDemoCart: true, addDemoOrder: addDemoOrder })
    }

    if ((currentUser && currentUser.id)) {
      const id = (currentUser || {})['id']
      handleCheckout(id)
    }
  }

  const refreshCart = () => {
    if (useDemoData || (currentUser && currentUser.id)) {
      const id = (currentUser || {})['id']
      loadUserCart(id)
    }
  }

  const handleRemove = (cartProduct) => () => (
    removeFromCart(cartProduct.cartItemId || cartProduct.id, (currentUser || {}).id, { isDemoCart: useDemoData })
  )

  useEffect(() => {
    if (!useDemoData) {
      refreshCart()
    }
  }, [])

  useEffect(() => {
    if (cartItems && cartItems.length === 0 && useDemoData) {
      useDemoCart()
    }
  }, [useDemoData])

  const EmptyMessage = () => (
    <Alert severity="warning" style={{ marginTop: '2em' }}>
      <Typography>Empty cart <Button style={{ marginLeft: '0.5em' }} onClick={refreshCart}><CachedIcon /> Refresh</Button></Typography>
    </Alert>
  );

  const checkoutButtonStyles = {
    backgroundColor: 'rgb(252, 210, 0)',
    color: 'rgb(15, 17, 17)',
    display: 'block',
    margin: '1em',
    padding: '0.5em 1em',
    float: 'right'
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Typography variant="h4" component="h2">
        <ShoppingCartIcon /> Cart
      </Typography>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" component="h2" style={{ float: 'left', marginTop: '0.5em', color: '#003500' }}>
          ${getCartTotalSum()}
        </Typography>

        <Button variant="contained" size="large" style={checkoutButtonStyles} onClick={checkoutAction}>Checkout</Button>
        <br />
      </Box>

      <Box sx={{ textAlign: 'left', mt: 6 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {(cartItems && cartItems.length > 0) ? (
              cartItems.map((cartProduct, i) => (
                <CartItemCard product={cartProduct} removeFromCart={handleRemove(cartProduct)} key={i} />
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
