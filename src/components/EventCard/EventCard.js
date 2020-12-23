import { Avatar, Box, Card, CardContent, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React, { useContext } from 'react'
import { GroupsContext } from '../../providers/GroupsProvider';

const EventCard = ({ title, description, userIds, date, groupId }) => {
  const { groups } = useContext(GroupsContext);
  const group = groups?.all?.find(fetchedGroup => fetchedGroup.id === groupId);

  console.log(groups)
  console.log(group);

  if (group) {
    return (
      <Card variant='outlined'>
        <CardContent>
          <Typography color='textSecondary'>
            {date}
          </Typography>
          <Typography noWrap variant='h6'>
            {title}
          </Typography>
          <Box style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }} >
            <Typography variant='body2' component='p' color='textSecondary'>
              {description}
            </Typography>
          </Box>
          <Box display='flex' justifyContent='flex-end' maxWidth marginTop={2}>
            <AvatarGroup max={3}>
              {userIds?.map(userId => {
                const user = group?.users?.find(groupUser => groupUser.id === userId);
                return <Avatar src={user?.photoURL} alt={user?.displayName} />
              })}
            </AvatarGroup>
          </Box>
        </CardContent>
      </Card>
    )
  }

  return null;
}

export default EventCard
