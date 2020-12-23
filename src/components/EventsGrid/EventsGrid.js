import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import useGroups from '../../hooks/useGroups';
import EventCard from '../EventCard/EventCard';

const EventsGrid = ({ events }) => {
  const { groups, fetchMyGroups } = useGroups();

  useEffect(() => {
    if (groups?.all?.length === 0) {
      fetchMyGroups();
    }
  }, [])

  if (events) {
    return (
      <Grid container spacing={2}>
        {events?.map(({ title, date, description, userIds, groupId }) => (
          <Grid item md={6} xs={12} lg={6}>
            <EventCard title={title} date={date} description={description} userIds={userIds} groupId={groupId} />
          </Grid>
        ))}
      </Grid>
    )
  }

  return null;
}

export default EventsGrid
