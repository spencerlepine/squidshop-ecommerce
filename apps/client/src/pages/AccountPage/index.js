import AccountDetails from '../../components/AccountDetails';
import withAuthRedirect from '../../hooks/useAuthRedirect';
import CenteredElement from '../../components/CenteredElement';

const AccountPage = () => {
  return (
    <CenteredElement>
      <AccountDetails />
    </CenteredElement>
  );
}

const redirectOptions = {
  shouldBeLoggedIn: true,
  // inaccessibleWhenLoggedIn: false,
};
export default withAuthRedirect(AccountPage, redirectOptions);
