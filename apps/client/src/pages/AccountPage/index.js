import { Container } from '@mui/system';
import AccountDetails from '../../components/AccountDetails';
import withAuthRedirect from '../../hooks/useAuthRedirect';

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

const redirectOptions = {
  shouldBeLoggedIn: true,
  // inaccessibleWhenLoggedIn: false,
};
export default withAuthRedirect(AccountPage, redirectOptions);
