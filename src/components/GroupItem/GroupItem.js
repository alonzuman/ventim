import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import './GroupItem.css';
import React from 'react'

const GroupItem = ({ group }) => {
  return (
    <>
      <ListItem button alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar src={group.image} />
        </ListItemAvatar>
        <ListItemText
          primary={group.name}
          secondary={(
            <>
              {group.description}
              <AvatarGroup className='groupItem__avatarGroup'>
                {group.users.map(user => <Avatar className='groupItem__avatar' src={user.avatar} />)}
              </AvatarGroup>
            </>
          )} />
      </ListItem>
      <Divider />
    </>
  )
}

export default GroupItem
