import AccountDetails from '../../components/Account/AccountDetails';
import withAuthRedirect from '../../hooks/useAuthRedirect';
import CenteredElement from '../../layout/CenteredElement';

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
