import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import './GroupItem.css';
import React from 'react'
import { Link } from 'react-router-dom';

const GroupItem = ({ group }) => {
  return (
    <Link className='groupItem__link' to={`/groups/${group.id}`}>
      <ListItem button alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar src={group.image} />
        </ListItemAvatar>
        <ListItemText
          primary={group.title}
          secondary={(
            <>
              {group.description}
              <AvatarGroup className='groupItem__avatarGroup'>
                {group.users.map(user => <Avatar className='groupItem__avatar' src={user.photoURL} />)}
              </AvatarGroup>
            </>
          )} />
      </ListItem>
      <Divider />
    </Link>
  )
}

export default GroupItem
