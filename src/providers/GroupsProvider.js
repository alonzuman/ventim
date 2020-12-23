import React, { createContext, useState } from 'react'
import firebase from 'firebase';
import { auth, db } from '../firebase';
const Groups = db.collection('groups');
const Events = db.collection('events');

const img = 'https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

export const GroupsContext = createContext(null);

const GroupsProvider = ({ children }) => {
  const [group, setGroup] = useState({
    isLoading: false,
  });

  const [groupEvents, setGroupEvents] = useState({
    isLoading: false,
  })

  const [groups, setGroups] = useState({
    isLoading: false,
    all: []
  })

  const fetchGroupEvents = (groupId) => {
    setGroupEvents({
      ...groupEvents,
      isLoading: false
    })
    Events.where('groupId', '==', groupId).get().then(snapshot => {
      const events = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      setGroupEvents({
        events,
        isLoading: false
      })
      console.log(events);
    }).catch(err => {
      console.log(err);
      setGroupEvents({
        ...groupEvents,
        isLoading: false
      })
    })
  }

  const createEvent = (groupId) => {
    const event = {
      date: Date.now() + 360000,
      userIds: group.userIds,
      title: 'Nisi minim Lorem tempor est laboris aute do',
      description: 'Non eiusmod amet laborum sunt est dolore do Lorem eiusmod. Non esse exercitation anim proident et mollit ad fugiat.',
      img,
      groupId,
      creatorIds: [auth.currentUser.uid]
    };

    Events.add(event)
      .then(snapshot => {
        console.log(snapshot);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const fetchGroup = (groupId) => {
    setGroup({
      ...group,
      isLoading: true
    })
    Groups.doc(groupId).get()
      .then(snapshot => {
        setGroup({
          id: snapshot.id,
          ...snapshot.data(),
          isLoading: false
        })
      }).catch(err => {
        console.log(err);
        setGroup({
          ...group,
          isLoading: false
        })
      })
  }

  const fetchMyGroups = () => {
    setGroups({
      ...groups,
      isLoading: true
    });

    Groups.where('userIds', 'array-contains', auth.currentUser.uid).get().then(snapshot => {
      const groups = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setGroups({
        isLoading: false,
        all: groups
      });
    }).catch(err => {
      console.log(err);
      setGroups({
        ...groups,
        isLoading: false
      })
    })
  }

  const value = {
    fetchGroup,
    fetchMyGroups,
    fetchGroupEvents,
    createEvent,
    group,
    groups,
    groupEvents
  }

  return (
    <GroupsContext.Provider value={value}>
      {children}
    </GroupsContext.Provider>
  )
}

export default GroupsProvider;
