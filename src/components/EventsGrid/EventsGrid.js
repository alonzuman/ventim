import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import useGroups from '../../hooks/useGroups';
import GridSkeleton from '../Skeletons/GridSkeleton';
import EventCard from '../EventCard/EventCard';

const EventsGrid = ({ myEvents, isLoading }) => {
  const { myGroups, fetchMyGroups } = useGroups();

  useEffect(() => {
    if (myGroups?.all?.length === 0) {
      fetchMyGroups();
    }
  }, [])

  if (isLoading) return <GridSkeleton />

  if (myEvents?.length > 0 && !isLoading) {
    return (
      <Grid container spacing={2}>
        {myEvents?.map(({ title, date, description, userIds, groupId }) => (
          <Grid key={date} item md={6} xs={12} lg={6}>
            <EventCard title={title} date={date} description={description} userIds={userIds} groupId={groupId} />
          </Grid>
        ))}
      </Grid>
    )
  }

  return null;
}

export default EventsGrid
