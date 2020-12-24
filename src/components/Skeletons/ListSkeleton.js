import { List, ListItem } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react'
import './ListSkeleton.css';

const ListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <Skeleton variant='circle' height={40} width={40} />
        <Skeleton className='listSkeleton__title' height={24} width={144} />
      </ListItem>
      <ListItem>
        <Skeleton variant='circle' height={40} width={40} />
        <Skeleton className='listSkeleton__title' height={24} width={256} />
      </ListItem>
      <ListItem>
        <Skeleton variant='circle' height={40} width={40} />
        <Skeleton className='listSkeleton__title' height={24} width={196} />
      </ListItem>
    </List>
  )
}

export default ListSkeleton
