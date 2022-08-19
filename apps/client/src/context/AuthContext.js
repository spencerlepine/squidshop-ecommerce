import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../api/authentication';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleStateLogout = () => {
    setCurrentUser(null)
    setIsLoggedIn(false)
  }

  useEffect(() => {
    AuthService.authenticateUser()
      .then((user) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
      })
      .catch(() => { })
      .then(() => setLoading(false))
  }, []);

  function getAccountDetails() {
    const id = (currentUser || {}).id

    setLoading(true);
    AuthService.fetchAccountDetails(id)
      .then((userDetails) => {
        setCurrentUser(userDetails)
        setIsLoggedIn(true)
      })
      .catch(() => setCurrentUser(null))
      .then(() => setLoading(false))
  }

  function loginUser(email, password) {
    setLoading(true);
    return AuthService.signInWithEmailAndPassword({ email, password })
      .then((user) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
        setLoading(false)
        return user
      })
      .catch(() => {
        setLoading(false)
      })
  }

  function signupUser(firstName, lastName, email, password) {
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

const useAuth = () => useContext(AuthContext);

export default useAuth;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};