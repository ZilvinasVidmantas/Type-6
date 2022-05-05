import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crudentials, User, UserRegistration } from '../../types';
import useLocalStorage from '../../hooks/use-local-storage-state';
import AuthService from './auth-service';

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
  const [loggedIn, setLoggedIn] = useLocalStorage<AuthContextType['loggedIn']>('loggedIn', false);
  const [user, setUser] = useLocalStorage<AuthContextType['user']>('user', null);
  const [error, setError] = useState<AuthContextType['error']>(null);

  const login: AuthContextType['login'] = async (crudentials, next) => {
    if (error) setError(null);
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

  const register: AuthContextType['register'] = async (userRegistration) => {
    if (error) setError(null);
    // Patikrinkite ar sutampa slaptažodžiai, jei ne išsaugokite klaidą ir nutraukite procesą
    if (userRegistration.password !== userRegistration.repeatPassword) {
      setError('Slaptažodžiai nesutampa');
      return;
    }
    const crudentials: Crudentials = {
      email: userRegistration.email,
      password: userRegistration.password,
    };
    try {
      // Kvieskite AuthService.register funkciją perduodami Crudentials tipo duomenis
      const loggedInUser = await AuthService.register(crudentials);
      // Jei gaunate vartotoją sėkmingai, išsaugokite vartotoją
      setLoggedIn(true);
      setUser(loggedInUser);
      navigate('/');
    } catch (err) {
      // Jei metama klaida, ją išsaugokite
      const { message } = (err as Error);
      setError(message);
    }
  };

  const logout: AuthContextType['logout'] = () => {
    setLoggedIn(false);
    setUser(null);
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
    register,
    logout,
  }), [loggedIn, user, error]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
