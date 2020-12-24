import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import EventsGrid from '../components/EventsGrid/EventsGrid'
import useEvents from '../hooks/useEvents';
import './MyEvents.css'

const MyEvents = () => {
  const { myEvents, isLoading, fetchMyEvents } = useEvents();

  useEffect(() => {
    fetchMyEvents();
  }, [])

  return (
    <>
      <Box marginTop={2} marginBottom={1}>
        <Typography className='myEvents__title' variant='h6'>
          My Events
        </Typography>
      </Box>
      <EventsGrid myEvents={myEvents} isLoading={isLoading} />
    </>
  )
}

export default MyEvents
