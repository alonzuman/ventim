import { Box } from '@material-ui/core'
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import Group from '../components/Group/Group'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Profile from '../components/Profile/Profile'
import SplashScreen from '../components/SplashScreen/SplashScreen'
import useAppInitializer from '../hooks/useAppInitializer'
import ProtectedRoute from './ProtectedRoute'
import RedirectToHome from './RedirectToHome'

const ProtectedRouter = () => {
  const { groupsLoading, eventsLoading, profileLoading } = useAppInitializer();
  const isLoading = groupsLoading || eventsLoading || profileLoading;

  if (isLoading) return <SplashScreen />

  return (
    <BrowserRouter>
      <Header />
      <RedirectToHome />
      <Box maxWidth={1024} marginRight='auto' marginLeft='auto' padding={2}>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute path='/profile' component={Profile} />
          <ProtectedRoute path='/groups/:groupId' component={Group} />
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default ProtectedRouter
