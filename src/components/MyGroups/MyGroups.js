import { Box, Divider, List, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import useAuth from '../../hooks/useAuth';
import GroupItem from '../GroupItem/GroupItem';
import './MyGroups.css';
const Groups = db.collection('groups');

const MyGroups = () => {
  const [groups, setGroups] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const fetchMyGroups = () => {
        const { uid } = user;
        Groups.where('userIds', 'array-contains', uid).get().then(snapshot => {
          const res = snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          });

          setGroups(res);
        })
      }

      fetchMyGroups();
    }
  }, [user])

  return (
    <Box display='flex' flexDirection='column' boxShadow={2} borderRadius={8}>
      <Box padding={2}>
        <Typography className='myGroups__title' variant='h6'>My Groups</Typography>
      </Box>
      <Divider />
      <List>
        {groups.map(group => <GroupItem key={group.id} group={group} />)}
      </List>
    </Box>
  )
}

export default MyGroups
