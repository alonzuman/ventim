import { Box, Link, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react'
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

const useStyles = makeStyles({
  title: {
    marginBottom: 16
  },

  link: {
    cursor: 'pointer'
  },

  desktopHero: {
    flex: 1
  },

  mobileHero: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  hero: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },

  mobileForm: {
    zIndex: 1,
    maxHeight: 768,
    maxWidth: 512,
    margin: 'auto 16px',
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0px 4px 10px #00000030'
  }
})

const hero = 'https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg';

const Auth = () => {
  const [type, setType] = useState(0);
  const matches = useMediaQuery('(min-width: 768px)');

  console.log({ matches })

  const handleType = () => {
    setType(type === 0 ? 1 : 0);
  }

  const classes = useStyles()

  return (
    <Box height='100vh' display='flex' marginRight='auto' marginLeft='auto'>
      <Box className={matches ? classes.desktopHero : classes.mobileHero}>
        <img src={hero} className={classes.hero} />
      </Box>
      <Box flex={1} padding={4} display='flex' justifyContent='center' flexDirection='column' className={!matches ? classes.mobileForm : ''}>
        <Typography variant='h5' className={classes.title} >Welcome to Ventim</Typography>
        {type === 0 && <SignIn />}
        {type === 1 && <SignUp />}
        {type === 0 && <Typography variant='body1'>Not signed up? <Link className={classes.link} onClick={handleType}>Sign up now</Link></Typography>}
        {type === 1 && <Typography variant='body1'>Already signed up? <Link className={classes.link} onClick={handleType}>Sign in now</Link></Typography>}
      </Box>
    </Box>
  )
}

export default Auth;
