import { useEffect, useState } from 'react'
import { auth } from '../firebase';
import useProfile from './useProfile';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const signInWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    auth.signInWithEmailAndPassword(email, password).then(() => {
      setIsLoading(false);
    }).catch(err => {
      setIsLoading(false);
      setError(err.message);
    })
  }

  const signUpWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    auth.signInWithEmailAndPassword(email, password).then(() => {
      setIsLoading(false);
    }).catch(err => {
      console.log(err);
      setIsLoading(false);
      setError(err.message);
    })
  }

  const signOut = () => {
    auth.signOut().catch(err => {
      console.log(err);
      setError(err.message);
    })
    return window.location.reload();
  }

  useEffect(() => {
    auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setIsLoading(false);
      } else {
        setIsLoading(false)
      }
    })
  }, [])

  return { user, isLoading, error, setError, signInWithEmailAndPassword, signUpWithEmailAndPassword, signOut }
}

export default useAuth
