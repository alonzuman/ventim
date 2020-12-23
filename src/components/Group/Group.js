import { Avatar, Box, Button, IconButton, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { AvatarGroup, Skeleton } from '@material-ui/lab';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useGroups from '../../hooks/useGroups';
import { GroupsContext } from '../../providers/GroupsProvider';
import EventsGrid from '../EventsGrid/EventsGrid';

const Group = ({ match }) => {
  const { createEvent } = useContext(GroupsContext);
  const { group, isLoading, fetchGroup } = useGroups();
  const { goBack } = useHistory();

  const { groupId } = match.params;

  useEffect(() => {
    if (group.id !== groupId) {
      fetchGroup(groupId)
    }
  }, [groupId]);

  useEffect(() => {

  }, [])

  return (
    <>
      <IconButton size='small' onClick={goBack}>
        <ChevronLeft />
      </IconButton>
      <Box width='100%' display='flex' alignItems='center' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' alignItems='flex-start'>
          <Typography style={{ marginBottom: 8 }} variant='h3'>{isLoading ? <Skeleton height={64} width={144} /> : group?.title}</Typography>
          <Typography color='textSecondary' variant='body1'>{isLoading ? <Skeleton height={36} width={256} /> : group?.description}</Typography>
        </Box>
        <AvatarGroup max={4}>
          {group?.users?.map(user => <Avatar src={user.photoURL} className='group__avatar' />)}
        </AvatarGroup>
      </Box>
      <Box marginBottom={2} marginTop={4} display='flex' alignItems='flex-start' justifyContent='space-between'>
        <Typography variant='h5'>Upcoming events</Typography>
        <Button color='primary'>See all</Button>
      </Box>
      <EventsGrid events={group?.events} />
      <Button onClick={() => createEvent(groupId)}>Add Event</Button>
    </>
  )
}

export default Group
