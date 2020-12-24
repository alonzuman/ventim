import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import './GroupItem.css';
import React from 'react'
import { Link } from 'react-router-dom';

const GroupItem = ({ group }) => {
  return (
    <Link className='groupItem__link' to={`/groups/${group.id}`}>
      <ListItem button alignItems='center'>
        <ListItemAvatar>
          <Avatar className='groupItem__image' src={group.image} />
        </ListItemAvatar>
        <ListItemText
          primary={(
            <Box component='span' display='flex' alignItems='center' maxWidth justifyContent='space-between'>
              {group.title}
              <AvatarGroup max={3} className='groupItem__avatarGroup'>
                {group.users.map(user => <Avatar key={user.id} className='groupItem__avatar' src={user.photoURL} />)}
              </AvatarGroup>
            </Box>)
          } /
        >
      </ListItem>
      <Divider />
    </Link>
  )
}

export default GroupItem
