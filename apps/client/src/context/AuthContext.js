import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../api/authentication';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthService.authenticateUser()
      .then((user) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
      })
      .catch(() => setCurrentUser(null))
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
    AuthService.signInWithEmailAndPassword(email, password)
      .then((user) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
      })
      .catch(() => setCurrentUser(null))
      .then(() => setLoading(false))
  }

  function signupUser(firstName, lastName, email, password) {
    setLoading(true);
    AuthService.createUserWithEmailAndPassword(firstName, lastName, email, password)
      .catch(() => setCurrentUser(null))
      .then(() => setLoading(false))
  }

  function logoutUser() {
    setLoading(true);
    AuthService.logoutUser()
      .then(() => setCurrentUser(null))
      .catch(() => setCurrentUser(null))
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