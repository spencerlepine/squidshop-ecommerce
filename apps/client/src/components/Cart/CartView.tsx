import { Box, Typography, Button } from '@mui/material';
import CartItemCard from './CartItemCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type Props = {
  data: any;
  handleCheckout: Function;
  handleRemove: Function;
}

const CartView: React.FC<Props> = ({ data, handleCheckout, handleRemove }) => {
  const checkoutButtonStyles = {
    backgroundColor: 'rgb(252, 210, 0)',
    color: 'rgb(15, 17, 17)',
    display: 'block',
    margin: '1em',
    padding: '0.5em 1em',
    float: 'right'
  } as React.CSSProperties;

  const cartItems = data || [];
  const priceStr = `$${(cartItems.reduce((sum: number, p: any) => sum += p.price, 0)).toFixed(2)}`

  return (
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Typography variant="h4" component="h2">
        <ShoppingCartIcon /> Cart
      </Typography>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" component="h2" style={{ float: 'left', marginTop: '0.5em', color: '#003500' }}>
          {priceStr}
        </Typography>

        <Button variant="contained" size="large" style={checkoutButtonStyles} onClick={() => handleCheckout()} className="checkoutBtn">
          Checkout
        </Button>
        <br />
      </Box>

      <Box sx={{ textAlign: 'left', mt: 6 }}>
        {(cartItems && cartItems.length > 0) && (
          cartItems.map((cartProduct: any, i: number) => (
            <CartItemCard product={cartProduct} removeFromCart={handleRemove(cartProduct)} key={i} />
          ))
        )}
      </Box>
    </Box>)
}

CartView.defaultProps = {
  data: [],
  handleRemove: () => { },
  handleCheckout: () => { },
}

export default CartView;
