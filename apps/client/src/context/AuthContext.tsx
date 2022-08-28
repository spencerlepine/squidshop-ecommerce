import * as React from 'react';
import * as PropTypes from 'prop-types';
import AuthService from 'api//authentication';

interface ContextInt {
  loading?: boolean;
  currentUser?: any;
  loginUser?: (email: string | null, password: string | null) => any;
  getAccountDetails?: () => any;
  logoutUser?: () => any;
  isLoggedIn?: boolean;
  signupUser?: (firstName: string, lastName: string, email: string, password: string) => any;
}

export const AuthContext = React.createContext<ContextInt>({});

interface Props {
  children: any;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<any|null>(null);
  const [loading, setLoading] = React.useState(true);

  const handleStateLogout = () => {
    setCurrentUser(null)
    setIsLoggedIn(false)
  }

  React.useEffect(() => {
    AuthService.authenticateUser()
      .then((user: any) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
      })
      .catch(() => { })
      .then(() => setLoading(false))
  }, []);

  function getAccountDetails() {
    if (currentUser) {
      setLoading(true);
      AuthService.fetchAccountDetails(currentUser.id)
        .then((userDetails: any) => {
          setCurrentUser(userDetails)
          setIsLoggedIn(true)
        })
        .catch(() => { })
        .then(() => setLoading(false))
    }
  }

  function loginUser(email: string | null, password: string | null) {
    setLoading(true);
    return AuthService.signInWithEmailAndPassword({ email, password })
      .then((user: any) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
        setLoading(false)
        return user
      })
      .catch(() => {
        setLoading(false)
      })
  }

  function signupUser(firstName: string, lastName: string, email: string, password: string) {
    setLoading(true);
    AuthService.createUserWithEmailAndPassword({ firstName, lastName, email, password })
      .catch(() => handleStateLogout())
      .then(() => setLoading(false))
  }

  function logoutUser() {
    setLoading(true);
    return AuthService.logoutUser()
      .then(() => handleStateLogout())
      .catch(() => handleStateLogout())
      .then(() => setLoading(false))
  }

  const value = {
    loading,
    currentUser,
    loginUser,
    getAccountDetails,
    logoutUser,
    isLoggedIn,
    signupUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => React.useContext(AuthContext);

export default useAuth;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};