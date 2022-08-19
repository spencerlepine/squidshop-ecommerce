import React from 'react';
import useAuth from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const withAuthRedirect = (Component, redirectOptions) =>
  () => {
    const { inaccessibleWhenLoggedIn, shouldBeLoggedIn } = redirectOptions

    const { currentUser, isLoggedIn } = useAuth();

    const isAuthenticated = isLoggedIn && currentUser
    const shouldRedirect = (inaccessibleWhenLoggedIn && isAuthenticated) || (shouldBeLoggedIn && !isAuthenticated)

    return shouldRedirect ? <Navigate to="/login" /> : <Component />
  };

export default withAuthRedirect;