import React, { createContext, useState } from 'react';
import { auth, db } from '../firebase';
const Events = db.collection('events');

export const EventsContext = createContext(null);

const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState({
    isLoading: false,
    all: []
  });

  const fetchMyEvents = () => {
    setEvents({
      ...events,
      isLoading: false,
    });
    Events.where('userIds', 'array-contains', auth.currentUser.uid).get()
      .then(snapshot => {
        const fetchedEvents = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });

        setEvents({
          all: fetchedEvents,
          isLoading: false
        });
      }).catch(err => {
        console.log(err);
        setEvents({
          ...events,
          isLoading: false,
        });
      })
  }

  const value = {
    events,
    fetchMyEvents
  }

  return (
    <EventsContext.Provider value={value}>
      {children}
    </EventsContext.Provider>
  )
}

export default EventsProvider
