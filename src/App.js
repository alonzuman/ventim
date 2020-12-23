import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './App.css';
import SplashScreen from './components/SplashScreen/SplashScreen';
import useAuth from './hooks/useAuth';
import Auth from './navigation/Auth';
import ProtectedRouter from './navigation/ProtectedRouter';
import EventsProvider from './providers/EventsProvider';
import GroupsProvider from './providers/GroupsProvider';
import ProfileProvider from './providers/ProfileProvider';

function App() {
  const { user, isLoading } = useAuth()

  if (isLoading) return <SplashScreen />
  if (!user) return <Auth />

  return (
    <ProfileProvider>
      <GroupsProvider>
        <EventsProvider>
          <ProtectedRouter />
        </EventsProvider>
      </GroupsProvider>
    </ProfileProvider>
  )
}

export default App;
