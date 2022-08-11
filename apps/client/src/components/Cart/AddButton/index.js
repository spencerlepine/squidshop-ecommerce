import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import useAuth from '../../../context/AuthContext';
import * as cart from '../../../api/cart';

const AddButton = ({ productId, useTinyButton }) => {
  const [loading, setLoading] = useState(false)
  const { isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleAdd = () => {
    if (isLoggedIn && currentUser.id) {
      setLoading(true)
      cart.addProductToCart(productId, currentUser.id, () => {
        setLoading(false)
      })
      return
    }

    navigate('/login')
  };

  if (useTinyButton) {
    const smallButtonStyles = { position: 'absolute', right: '1em', bottom: '1em' }
    return <Button
      size="small"
      style={smallButtonStyles}
      onClick={handleAdd}
      disabled={loading}
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
    <Button disabled={loading} variant="contained" size="large" style={cartButtonStyles} onClick={handleAdd}>Add to Cart</Button>
  )
}

export default AddButton
