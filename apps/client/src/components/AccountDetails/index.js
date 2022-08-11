import React, { useEffect } from 'react';
import useAuth from '../../context/AuthContext';
import useDemoSettings from '../../context/DemoSettingsContext';
import { Box, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { Link } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { logoutUser } from '../../api/authentication';

const demoUser = ({
  email: `${(Math.random() + 1).toString(36).substring(7)}@gmail.com`,
  firstName: 'John',
  lastName: 'Deer',
})

const LogoutButton = ({ isDemoMode }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (isDemoMode === false) {
      return logoutUser()
        .then(() => navigate("/"))
        .catch((err) => console.error(err))
    }

    navigate("/")
  }

  const logoutButtonStyles = {
    backgroundColor: 'rgb(252 142 0)',
    color: 'rgb(15, 17, 17)',
    display: 'block',
    margin: 'auto',
    marginTop: '3em',
    width: '10em'
  };
  return (
    <Button variant="contained" size="large" style={logoutButtonStyles} onClick={handleLogout}>
      Logout
    </Button>
  )
}

const AccountDetails = () => {
  const { currentUser, getAccountDetails } = useAuth();
  const { useDemoData } = useDemoSettings();
  const userData = useDemoData ? demoUser : { ...demoUser, ...(currentUser || {}) }

  useEffect(() => {
    getAccountDetails()
  }, [])

  return (
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Typography variant="h4" component="h2">
        Hello {userData.firstName} 👋
      </Typography>

      <Alert style={{ width: 250, margin: '1em auto' }}>
        <Typography variant="p" component="p">
          <span style={{ fontWeight: 'bold' }}>Email:</span> {userData.email}
        </Typography>
      </Alert>

      <Box sx={{ margin: '2em auto' }}>
        <Link to="/cart" component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit', margin: '0.5em' }}>
          <Button variant="outlined" size="large">
            <ShoppingCartIcon /> Cart
          </Button>
        </Link>
        <Link to="/orders" component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit', margin: '0.5em' }}>
          <Button variant="outlined" size="large">
            <ReceiptLongIcon /> Orders
          </Button>
        </Link>
      </Box>

      <LogoutButton isDemoMode={useDemoData} />
    </Box>)
}

export default AccountDetails;
