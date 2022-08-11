import { Link } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import { Box, Button } from '@mui/material/';
import { Container } from '@mui/system';
import AccountDetails from '../../components/AccountDetails';

// should render user first name TODO
// should render current users email TODO
// should render current address with change feature TODO
// should render orders page link TODO
// should render cart page link TODO
const AccountPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <AccountDetails />

      <Box sx={{ mt: 2 }}>
        <Link to="/cart" component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Button>Cart</Button>
        </Link>
        <Link to="/orders" component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Button>Orders</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default AccountPage;
