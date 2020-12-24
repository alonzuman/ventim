import { List } from '@material-ui/core'
import React from 'react'
import GroupItem from '../GroupItem/GroupItem'
import ListSkeleton from '../Skeletons/ListSkeleton'

const GroupsList = ({ groups, isLoading }) => {

  if (isLoading) return <ListSkeleton />

  if (groups && !isLoading) {
    return (
      <List>
        {groups?.map(group => <GroupItem key={group.id} group={group} />)}
      </List>
    )
  }

  return null;
}

export default GroupsList
