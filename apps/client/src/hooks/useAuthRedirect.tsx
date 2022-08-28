import * as React from 'react';
import useAuth from 'context/AuthContext';
import useDemoSettings from 'context/DemoSettingsContext';
import { Navigate, useLocation } from 'react-router-dom';

type RedirectOpts = {
  shouldBeLoggedIn?: boolean;
  inaccessibleWhenLoggedIn?: boolean;
}

const withAuthRedirect = (Component: any, redirectOptions: RedirectOpts) =>
  () => {
    const location = useLocation();
    const { inaccessibleWhenLoggedIn, shouldBeLoggedIn } = redirectOptions

    const { currentUser, isLoggedIn } = useAuth();
    const { useDemoData } = useDemoSettings();
    const isAuthenticated = isLoggedIn && currentUser
    const shouldRedirect = (inaccessibleWhenLoggedIn && isAuthenticated) || (shouldBeLoggedIn && !isAuthenticated)

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