import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CachedIcon from '@mui/icons-material/Cached';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from 'context/AuthContext';
import useDemoSettings from 'context/DemoSettingsContext';
import useOrders from 'context/OrdersContext';
import OrderItemCard from '../OrderItemCard';

const OrdersView = () => {
  const { currentUser } = useAuth();
  const { useDemoData } = useDemoSettings();
  const { orderItems, loading, loadUserOrders, useDemoOrders } = useOrders();

  const refreshOrders = () => {
    if (useDemoData || (currentUser && currentUser.id)) {
      const id = (currentUser || {})['id']
      loadUserOrders(id)
    }
  }

  useEffect(() => {
    if (!useDemoData) {
      refreshOrders()
    }
  }, [])

  useEffect(() => {
    if (orderItems && orderItems.length === 0 && useDemoData) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useDemoOrders()
    }
  }, [useDemoData])

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
              orderItems.map((orderItem, i) => (
                <OrderItemCard order={orderItem} key={i} />
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
