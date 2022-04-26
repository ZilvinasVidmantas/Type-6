import React, { createContext, useMemo, useState } from 'react';
import { User } from '../../types/index';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  login: () => void,
  logout: () => void,
};

const initialValue: AuthContextType = {
  user: null,
  loggedIn: false,
  login: () => {
    throw new Error('AuthContext.login is not implemented');
  },
  logout: () => {
    throw new Error('AuthContext.logout is not implemented');
  },
};

const AuthContext = createContext(initialValue);

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<AuthContextType['loggedIn']>(false);
  const [user, setUser] = useState<AuthContextType['user']>(null);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const providerValue = useMemo(() => ({
    user,
    loggedIn,
    login,
    logout,
  }), [loggedIn, user]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
