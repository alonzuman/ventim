import { Box, CircularProgress } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import useProfile from '../hooks/useProfile'
import ProtectedRoute from './ProtectedRoute'

const ProtectedRouter = () => {
  const { isLoading } = useProfile();

  if (isLoading) return <CircularProgress />

  return (
    <BrowserRouter>
      <Header />
      <Box maxWidth={1024} marginRight='auto' marginLeft='auto' padding={2}>
        <Switch>
          <ProtectedRoute path='/' component={Home} />
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default ProtectedRouter
