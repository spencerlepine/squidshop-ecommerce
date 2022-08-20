import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import useAuth from '../../../context/AuthContext';
import useCart from '../../../context/CartContext';
import useDemoSettings from '../../../context/DemoSettingsContext';

const AddButton = ({ productId, useTinyButton, entireProduct }) => {
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

    if (isLoggedIn && currentUser && currentUser.id) {
      addItemToCart(entireProduct, currentUser.id)
      navigate('/cart')
    }
  };

  if (useTinyButton) {
    const smallButtonStyles = { position: 'absolute', right: '1em', bottom: '1em' }
    return <Button
      size="small"
      style={smallButtonStyles}
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
    <Button variant="contained" size="large" style={cartButtonStyles} onClick={handleAdd}>Add to Cart</Button>
  )
}

export default AddButton
