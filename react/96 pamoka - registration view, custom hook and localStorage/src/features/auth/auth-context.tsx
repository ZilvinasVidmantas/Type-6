import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/index';
import useLocalStorage from '../../hooks/use-local-storage-state';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  login: (next: string) => void,
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
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useLocalStorage<AuthContextType['loggedIn']>('loggedIn', false);
  const [user, setUser] = useState<AuthContextType['user']>(null);

  const login: AuthContextType['login'] = (next) => {
    setLoggedIn(true);
    // Panaudosiu redirect linką, jeigu toks yra
    navigate(next);
  };

  const logout: AuthContextType['logout'] = () => {
    setLoggedIn(false);
    navigate('/');
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
