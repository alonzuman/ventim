import React, { useContext } from 'react'
import { EventsContext } from '../providers/EventsProvider'

const useEvents = () => {
  const { myEvents, fetchMyEvents, isLoading } = useContext(EventsContext);
  return { myEvents, fetchMyEvents, isLoading }
}

export default useEvents
