import React, { useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const RedirectToHome = () => {
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    history.listen(location => {
      const { pathname } = location;
      console.log('yo')

      if ((pathname === 'sign-in' || pathname === 'sign-up') && user) {
        return <Redirect to='/' />
      }
    })
  }, [])

  return null;
}

export default RedirectToHome
