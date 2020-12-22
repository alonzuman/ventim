import { Box, Divider, List, Typography } from '@material-ui/core'
import React from 'react'
import GroupItem from '../GroupItem/GroupItem';
import './MyGroups.css';

const groups = [
  {
    id: 1,
    name: 'Sint irure adipisicing id reprehenderit nisi',
    image: 'https://images.unsplash.com/photo-1608635361103-0d323bac82f9?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Qui ut enim tempor reprehenderit irure excepteur pariatur ea id cupidatat dolor.Ad anim ea laborum anim mollit duis consequat cillum.',
    users: [
      { id: 1, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 2, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 4, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ]
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1608635361103-0d323bac82f9?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Est pariatur voluptate in irure mollit aliquip deserunt ad',
    description: 'Eu aliquip labore excepteur adipisicing incididunt occaecat.Reprehenderit irure cillum aliqua proident consectetur aute anim duis occaecat.',
    users: [
      { id: 1, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 2, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 4, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ]
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1608635361103-0d323bac82f9?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Proident nisi',
    description: 'Officia tempor nulla ullamco qui esse eu eu aute.Enim magna quis nulla id eiusmod laborum exercitation culpa esse mollit magna irure.',
    users: [
      { id: 1, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 2, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 4, displayName: 'Dolore adipisicing', avatar: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ]
  },
]

const MyGroups = () => {
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
