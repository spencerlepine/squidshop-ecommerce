import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import useAuth from 'context/AuthContext';
import useCart from 'context/CartContext';
import useDemoSettings from 'context/DemoSettingsContext';

type Props = {
  useTinyButton: boolean | undefined;
  entireProduct: any;
}

const AddButton:  React.FC<Props> = ({ useTinyButton= false, entireProduct = {} }) => {
  const { addItemToCart } = useCart();
  const { useDemoData } = useDemoSettings();
  const { isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleAdd = () => {
    if (useDemoData) {
      addItemToCart(entireProduct, 'userId', { isDemoCart: true, product: entireProduct })
      navigate('/cart')
      return
    }

    if (!isLoggedIn) {
      navigate('/login')
    }

    if (isLoggedIn && currentUser && currentUser.id) {
      addItemToCart(entireProduct, currentUser.id)
      navigate('/cart')
    }
  };

  if (useTinyButton) {
    return <Button
      size="small"
      style={{ position: 'absolute', right: '1em', bottom: '1em' }}
      onClick={handleAdd}
    >
      Add to Cart
    </Button>
  }

  const cartButtonStyles = {
    backgroundColor: 'rgb(252, 210, 0)',
    color: 'rgb(15, 17, 17)',
    display: 'block',
    marginTop: '2em',
  };
  return (
    <Button className="addToCartBtn" variant="contained" size="large" style={cartButtonStyles} onClick={handleAdd}>Add to Cart</Button>
  )
}

export default AddButton
