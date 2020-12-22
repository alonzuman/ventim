import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './App.css';
import useAuth from './hooks/useAuth';
import Auth from './navigation/Auth';
import ProtectedRouter from './navigation/ProtectedRouter';
import ProfileProvider from './providers/ProfileProvider';

function App() {
  const { user, isLoading } = useAuth()

  if (isLoading) return <CircularProgress />
  if (!user) return <Auth />

  return (
    <ProfileProvider>
      <ProtectedRouter />
    </ProfileProvider>
  )
}

export default App;
