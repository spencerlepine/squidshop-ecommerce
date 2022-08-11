import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CachedIcon from '@mui/icons-material/Cached';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../context/AuthContext';
import useDemoSettings from '../../../context/DemoSettingsContext';
import useOrders from '../../../context/OrdersContext';
import OrderItemCard from '../OrderItemCard';

const OrdersView = () => {
  const { currentUser } = useAuth();
  const { useDemoData } = useDemoSettings();
  const { orderItems, loading, loadUserOrders } = useOrders();

  const refreshOrders = () => {
    if (useDemoData || (currentUser && currentUser.id)) {
      const id = (currentUser || {})['id']
      loadUserOrders(id)
    }
  }

  useEffect(() => {
    refreshOrders()
  }, [])

  const EmptyMessage = () => (
    <Alert severity="warning" style={{ marginTop: '2em' }}>
      <Typography>Failed to load <Button style={{ marginLeft: '0.5em' }} onClick={refreshOrders}><CachedIcon /> Refresh</Button></Typography>
    </Alert>
  )

  return (
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Typography variant="h4" component="h2">
        <ReceiptLongIcon /> Orders
      </Typography>

      <Box sx={{ textAlign: 'left', mt: 6 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {(orderItems && orderItems.length > 0) ? (
              orderItems.map((orderItem) => (
                <OrderItemCard order={orderItem} />
              ))
            ) : (
              <EmptyMessage />
            )}
          </>
        )}
      </Box>
    </Box>)
}

export default OrdersView;
