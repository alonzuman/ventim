import React, { createContext } from 'react'
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const {user, isLoading, error} = useAuth();

  const value = {
    user,
    isLoading,
    error
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
