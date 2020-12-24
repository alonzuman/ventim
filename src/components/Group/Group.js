import { Avatar, Box, Button, CircularProgress, IconButton, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { AvatarGroup, Skeleton } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useGroups from '../../hooks/useGroups';
import EventsGrid from '../EventsGrid/EventsGrid';

const Group = ({ match }) => {
  const { group, fetchGroup } = useGroups();
  const { data, isLoading } = group;
  const { goBack } = useHistory();

  const { groupId } = match.params;

  useEffect(() => {
    if (group.id !== groupId) {
      fetchGroup(groupId)
    }
  }, [groupId]);

  if (isLoading) {
    return (
      <>
        <Skeleton variant='circle' height={32} width={32} />
        <Skeleton height={64} width={144} />
        <Skeleton height={36} width={256} />
      </>
    )
  }

  if (!isLoading && group) {
    return (
      <>
        <IconButton size='small' onClick={goBack}>
          <ChevronLeft />
        </IconButton>
        <Box width='100%' display='flex' alignItems='center' justifyContent='space-between'>
          <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <Typography style={{ marginBottom: 8 }} variant='h3'>{data?.title}</Typography>
            <Typography color='textSecondary' variant='body1'>{data?.description}</Typography>
          </Box>
          <AvatarGroup max={4}>
            {data?.users?.map(user => <Avatar src={user.photoURL} className='group__avatar' />)}
          </AvatarGroup>
        </Box>
        <Box marginBottom={2} marginTop={4} display='flex' alignItems='flex-start' justifyContent='space-between'>
          <Typography variant='h5'>Upcoming events</Typography>
          <Button color='primary'>See all</Button>
        </Box>
        <EventsGrid events={data?.events} />
      </>
    )
  }

  return null;
}

export default Group
