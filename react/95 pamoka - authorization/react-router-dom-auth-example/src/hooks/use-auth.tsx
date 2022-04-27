import React from 'react';
import AuthContext from '../features/auth/auth-context';

function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth;
