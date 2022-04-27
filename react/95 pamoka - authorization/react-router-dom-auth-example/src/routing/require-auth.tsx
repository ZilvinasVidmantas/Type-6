import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/use-auth';

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
