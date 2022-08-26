import React from 'react';
import useAuth from '../context/AuthContext';
import useDemoSettings from '../context/DemoSettingsContext';
import { Navigate, useLocation } from 'react-router-dom';

const withAuthRedirect = (Component, redirectOptions) =>
  () => {
    const location = useLocation();
    const { inaccessibleWhenLoggedIn, shouldBeLoggedIn } = redirectOptions

    const { currentUser, isLoggedIn } = useAuth();
    const { useDemoData } = useDemoSettings();
    const isAuthenticated = isLoggedIn && currentUser
    const shouldRedirect = (inaccessibleWhenLoggedIn && isAuthenticated) || (shouldBeLoggedIn && !isAuthenticated)

    console.log(Component, isAuthenticated, shouldRedirect)

    if (process.env.NODE_ENV === 'test') {
      return <Component />
    }

    if (useDemoData) {
      return inaccessibleWhenLoggedIn ? <Navigate to="/" /> : <Component />
    }

    if (isAuthenticated) {
      return shouldRedirect ? <Navigate to="/" /> : <Component />
    }

    return shouldRedirect ? <Navigate to="/login" /> : <Component />
  };

export default withAuthRedirect;