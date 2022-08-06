import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as authApi from '../api/authentication';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApi.authenticateUser()
    .then((user) => {
      setCurrentUser(user)
      setIsLoggedIn(true)
    })
    .catch(() => setCurrentUser({}))
    .then(() => setLoading(false))
  }, []);

  // function getAccountDetails() {
  //   setLoading(true);
  //   authUser.fetchAccountDetails(userDetails => {
  //     setAccountDetails(userDetails);
  //     setLoading(false);
  //   });
  // }

  function loginUser(email, password) {
    setLoading(true);
    authApi.signInWithEmailAndPassword(email, password)
      .then((user) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
      })
      .catch(() => setCurrentUser({}))
      .then(() => setLoading(false))
  }

  function signupUser(firstName, lastName, email, password) {
    setLoading(true);
    authApi.createUserWithEmailAndPassword(firstName, lastName, email, password)
    // .then((user) => setCurrentUser()) // TODO navigate to login
      .then(res => console.log(res))
      .catch(() => setCurrentUser({}))
      .then(() => setLoading(false))
  }

  // function logoutUser() {
  //   setLoading(true);
  //   authUser.signOut(() => {
  //     setCurrentUser(null);
  //     setLoading(false);
  //   });
  // }

  // function resetPassword(email) {
  //   setLoading(true);
  //   authUser.sendPasswordResetEmail(email, () => {
  //     setLoading(false);
  //   });
  // }

  const value = {
    loading,
    currentUser,
    loginUser,
    // logoutUser,
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