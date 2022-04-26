import React, { createContext, useMemo, useState } from 'react';
import { User } from '../../types/index';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  login: () => void,
};

const initialValue: AuthContextType = {
  user: null,
  loggedIn: false,
  login: () => {
    throw new Error('AuthContext.login is not implemented');
  },
};

const AuthContext = createContext(initialValue);

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<AuthContextType['loggedIn']>(false);
  const [user, setUser] = useState<AuthContextType['user']>(null);

  const login = () => {
    console.log('vartotojas prisijungia');
    setLoggedIn(true);
  };

  const providerValue = useMemo(() => ({
    user,
    loggedIn,
    login,
  }), [loggedIn, user]);

  console.log(providerValue);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
