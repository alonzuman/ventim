import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import './SignIn.css';

const SignIn = () => {
  const { signInWithEmailAndPassword, error, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    return signInWithEmailAndPassword(email, password)
  }

  return (
    <form className='signIn' onSubmit={handleSubmit}>
      <TextField error={!!error} label='Email' variant='outlined' fullWidth value={email} onChange={e => setEmail(e.target.value)} />
      <TextField error={!!error} helperText={error} label='Password' variant='outlined' type='password' fullWidth value={password} onChange={e => setPassword(e.target.value)} />
      <Button size='large' variant='contained' color='primary' type='submit'>
        {isLoading ? <CircularProgress color='default' size={24} /> : 'Sign In'}
      </Button>
    </form>
  )
}

export default SignIn
