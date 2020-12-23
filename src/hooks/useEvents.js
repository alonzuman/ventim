import React, { useContext } from 'react'
import { EventsContext } from '../providers/EventsProvider'

const useEvents = () => {
  const { events, fetchMyEvents } = useContext(EventsContext);
  return { events, fetchMyEvents }
}

export default useEvents
