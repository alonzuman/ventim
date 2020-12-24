import React, { createContext, useReducer, useState } from 'react';
// import firebase from 'firebase';
import { auth, db } from '../firebase';
import eventsReducer, { ERROR, IS_LOADING_MY_EVENTS, SET_MY_EVENTS } from '../reducers/events';
const Events = db.collection('events');
const img = 'https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

export const INITIAL_STATE = {
  myEvents: [],
  isLoading: false,
}

export const EventsContext = createContext(null);

const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, INITIAL_STATE);
  const { myEvents, isLoading } = state;

  // const createEvent = (groupId) => {
  //   const event = {
  //     date: Date.now() + 360000,
  //     userIds: group.userIds,
  //     title: 'Nisi minim Lorem tempor est laboris aute do',
  //     description: 'Non eiusmod amet laborum sunt est dolore do Lorem eiusmod. Non esse exercitation anim proident et mollit ad fugiat.',
  //     img,
  //     groupId,
  //     creatorIds: [auth.currentUser.uid]
  //   };

  //   Events.add(event)
  //     .then(snapshot => {
  //       console.log(snapshot);
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  const fetchMyEvents = () => {
    dispatch({
      type: IS_LOADING_MY_EVENTS
    })
    Events.where('userIds', 'array-contains', auth.currentUser.uid).get()
      .then(snapshot => {
        const fetchedEvents = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });

        dispatch({
          type: SET_MY_EVENTS,
          payload: fetchedEvents
        })

      }).catch(err => {
        console.log(err);
        dispatch({
          type: ERROR
        })
      })
  }

  const value = {
    myEvents,
    isLoading,
    fetchMyEvents
  }

  return (
    <EventsContext.Provider value={value}>
      {children}
    </EventsContext.Provider>
  )
}

export default EventsProvider
