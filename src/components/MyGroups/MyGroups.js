import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import useGroups from '../../hooks/useGroups';
import GroupsList from '../GroupsList/GroupsList';
import './MyGroups.css';
import MyGroupsHeader from './MyGroupsHeader';

const MyGroups = () => {
  const { myGroups, fetchMyGroups } = useGroups();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchMyGroups()
    }
  }, [user])

  return (
    <>
    <Box className='myGroups' position='sticky' top={88} overflow='scroll' height={768} display='flex' flexDirection='column' boxShadow={2} borderRadius={8}>
      <MyGroupsHeader />
      <GroupsList groups={myGroups?.all} isLoading={myGroups?.isLoading} />
    </Box>
    </>
  )
}

export default MyGroups
