import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  // if (!user) return <Redirect to='/sign-in' />
  return <Route component={Component} {...rest} />
}

export default ProtectedRoute
