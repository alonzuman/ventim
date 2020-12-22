import { Button, CircularProgress, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
  const { signUpWithEmailAndPassword, error, setError, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (confirmPassword !== password) {
      return setError("Passwords don't match");
    } else {
      return signUpWithEmailAndPassword(email, password)
    }
  }

  return (
    <form className='signUp' onSubmit={handleSubmit}>
      <TextField
        error={!!error}
        variant='outlined' fullWidth
        label='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        error={!!error}
        variant='outlined' fullWidth
        label='Password'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        error={!!error}
        helperText={error}
        variant='outlined' fullWidth
        label='Confirm password'
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <Button
        size='large'
        color='primary'
        variant='contained'
        type='submit'
      >
        {isLoading ? <CircularProgress color='default' size={24} /> : 'Sign Up'}
      </Button>
    </form>
  )
}

export default SignUp
