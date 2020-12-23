import { Box, Button, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import useEvents from '../../hooks/useEvents'
import useProfile from '../../hooks/useProfile'
import { seedGroups } from '../../utils/firebase'
import EventsGrid from '../EventsGrid/EventsGrid'
import MyGroups from '../MyGroups/MyGroups'

const Home = () => {
  const { signOut } = useAuth();
  const { profile } = useProfile();
  const { events, fetchMyEvents } = useEvents();

  useEffect(() => {
    if (events?.all?.length === 0) {
      fetchMyEvents();
      console.log(events);
    }
  }, [])

  useEffect(() => {
    console.log(events);
  }, [events])

  return (
    <Box display='flex'>
      <Box flex={6} padding={2}>
        <Typography variant='h3'>Welcome to Ventim</Typography>
        <Button onClick={() => seedGroups(profile)}>Seed groups</Button>
        <Button onClick={signOut}>Sign Out</Button>
        <EventsGrid events={events?.all} />
      </Box>
      <Box flex={4} padding={2}>
        <MyGroups />
      </Box>
    </Box>
  )
}

export default Home
