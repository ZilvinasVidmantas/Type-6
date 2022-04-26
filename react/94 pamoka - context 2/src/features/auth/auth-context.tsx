import React, { createContext } from 'react';
import { User } from '../../types/index';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean;
};

const initialValue: AuthContextType = {
  user: null,
  loggedIn: false,
};

const AuthContext = createContext(initialValue);

export const AuthProvider: React.FC = ({ ...children }) => (
  <AuthContext.Provider value={initialValue}>
    {children}
  </AuthContext.Provider>
);

export default AuthContext;
