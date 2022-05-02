import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crudentials, User } from '../../types';
import useLocalStorage from '../../hooks/use-local-storage-state';
import AuthService from './auth-service';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  error: string | null,
  clearError: VoidFunction,
  login: (crudentials: Crudentials, next: string) => void,
  logout: VoidFunction,
};

const initialValue: AuthContextType = {
  user: null,
  loggedIn: false,
  error: null,
  clearError: () => {
    throw new Error('AuthContext.clearError is not implemented');
  },
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
  const [user, setUser] = useLocalStorage<AuthContextType['user']>('user', null);
  const [error, setError] = useState<AuthContextType['error']>(null);

  const login: AuthContextType['login'] = async (crudentials: Crudentials, next) => {
    try {
      const loggedInUser = await AuthService.login(crudentials);
      setLoggedIn(true);
      setUser(loggedInUser);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    }
  };

  const logout: AuthContextType['logout'] = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const clearError: AuthContextType['clearError'] = () => {
    setError(null);
  };

  const providerValue = useMemo(() => ({
    user,
    loggedIn,
    error,
    clearError,
    login,
    logout,
  }), [loggedIn, user, error]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
