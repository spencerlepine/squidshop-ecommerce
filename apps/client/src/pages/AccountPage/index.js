import { Container } from '@mui/system';
import AccountDetails from '../../components/AccountDetails';

// should render user first name
// should render current users email
// should render orders page link
// should render cart page link
const AccountPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <AccountDetails />
    </Container>
  );
}

export default AccountPage;
