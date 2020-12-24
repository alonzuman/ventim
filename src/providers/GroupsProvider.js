import React, { createContext, useReducer, useState } from 'react'
import { auth, db } from '../firebase';
import groupsReducer, { ERROR, IS_LOADING_GROUP, IS_LOADING_GROUPS, SET_GROUP, SET_GROUPS } from '../reducers/groups';
const Groups = db.collection('groups');

export const INITIAL_STATE = {
  group: {
    isLoading: false,
    data: {}
  },
  myGroups: {
    isLoading: false,
    all: []
  },
}

export const GroupsContext = createContext(null);

const GroupsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groupsReducer, INITIAL_STATE);
  const { group, myGroups } = state;

  const fetchGroup = (groupId) => {
    dispatch({
      type: IS_LOADING_GROUP
    });
    Groups.doc(groupId).get()
      .then(snapshot => {
        dispatch({
          type: SET_GROUP,
          payload: {
            id: snapshot.id,
            ...snapshot.data()
          }
        });
      }).catch(err => {
        console.log(err);
        dispatch({
          type: ERROR
        })
      })
  }

  const fetchMyGroups = () => {
    dispatch({
      type: IS_LOADING_GROUPS
    })

    Groups.where('userIds', 'array-contains', auth.currentUser.uid).get().then(snapshot => {
      const groups = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      dispatch({
        type: SET_GROUPS,
        payload: groups
      })
    }).catch(err => {
      console.log(err);
      dispatch({
        type: ERROR
      })
    })
  }

  const value = {
    fetchGroup,
    fetchMyGroups,
    group,
    myGroups,
  }

  return (
    <GroupsContext.Provider value={value}>
      {children}
    </GroupsContext.Provider>
  )
}

export default GroupsProvider;
