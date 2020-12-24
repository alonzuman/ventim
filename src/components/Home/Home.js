import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import useProfile from '../../hooks/useProfile'
import MyEvents from '../../MyEvents/MyEvents'
import { seedGroups } from '../../utils/firebase'
import MyGroups from '../MyGroups/MyGroups'

const useStyles = makeStyles({
  title: {
    fontSize: 32,
    fontWeight: 600
  }
})

const Home = () => {
  const { signOut } = useAuth();
  const { profile } = useProfile();

  const classes = useStyles();

  return (
    <Box display='flex'>
      <Box flex={6} padding={2}>
        <Typography className={classes.title} variant='h1'>Welcome to Ventim</Typography>
        <Button onClick={() => seedGroups(profile)}>Seed groups</Button>
        <Button onClick={signOut}>Sign Out</Button>
        <MyEvents />
      </Box>
      <Box flex={4} padding={2}>
        <MyGroups />
      </Box>
    </Box>
  )
}

export default Home
