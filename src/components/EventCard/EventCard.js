import { Avatar, Box, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React, { useContext } from 'react'
import { GroupsContext } from '../../providers/GroupsProvider';

const useStyles = makeStyles({
  root: {
    transition: 'all .15s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      border: '1px solid #acacac',
      boxShadow: '0px 4px 10px #00000010'
    }
  }
})

const EventCard = ({ title, description, userIds, date, groupId }) => {
  const { myGroups } = useContext(GroupsContext);
  const group = myGroups?.all?.find(fetchedGroup => fetchedGroup.id === groupId);

  const classes = useStyles();

  if (group) {
    return (
      <Card variant='outlined' className={classes.root}>
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
                return <Avatar key={userId} src={user?.photoURL} alt={user?.displayName} />
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
