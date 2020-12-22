import { Box, Link, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import './Auth.css';

const hero = 'https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg';

const Auth = () => {
  const [type, setType] = useState(0);

  const handleType = () => {
    setType(type === 0 ? 1 : 0);
  }

  return (
    <Box height='100vh' display='flex' marginRight='auto' marginLeft='auto'>
      <Box flex={1} height='100vh'>
        <img src={hero} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
      </Box>
      <Box flex={1} padding={4} display='flex' justifyContent='center' flexDirection='column'>
        <Typography variant='h5' className='Auth__title' >Welcome to Ventim</Typography>
        {type === 0 && <SignIn />}
        {type === 1 && <SignUp />}
        {type === 0 && <Typography variant='body1'>Not signed up? <Link className='Auth__link' onClick={handleType}>Sign up now</Link></Typography>}
        {type === 1 && <Typography variant='body1'>Already signed up? <Link className='Auth__link' onClick={handleType}>Sign in now</Link></Typography>}
      </Box>
    </Box>
  )
}

export default Auth;
