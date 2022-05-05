import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crudentials, User, UserRegistration } from '../../types';
import useLocalStorage from '../../hooks/use-local-storage-state';
import AuthService, { AuthPromise } from './auth-service';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  error: string | null,
  clearError: VoidFunction,
  login: (crudentials: Crudentials, next: string) => void,
  register: (userRegistration: UserRegistration) => void,
  logout: VoidFunction,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage<AuthContextType['user']>('user', null);
  const [error, setError] = useState<AuthContextType['error']>(null);

  const authenticate = async (crudentials: Crudentials, authMethod: AuthPromise, next = '/') => {
    try {
      const loggedInUser = await authMethod(crudentials);
      setUser(loggedInUser);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    }
  };

  const login: AuthContextType['login'] = async (crudentials, next) => {
    if (error) setError(null);
    authenticate(crudentials, AuthService.login, next);
  };

  const register: AuthContextType['register'] = async ({ email, password, repeatPassword }) => {
    if (error) setError(null);
    if (password !== repeatPassword) {
      setError('Slaptažodžiai nesutampa');
      return;
    }
    const crudentials: Crudentials = { email, password };
    authenticate(crudentials, AuthService.register);
  };

  const logout: AuthContextType['logout'] = () => {
    setUser(null);
    navigate('/');
  };

  const clearError: AuthContextType['clearError'] = () => {
    setError(null);
  };

  const providerValue = useMemo(() => ({
    user,
    loggedIn: Boolean(user),
    error,
    clearError,
    login,
    register,
    logout,
  }), [user, error]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
