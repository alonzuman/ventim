import { Avatar, Box, Typography } from '@material-ui/core'
import React from 'react'
import useProfile from '../../hooks/useProfile'

const Header = () => {
  const { profile } = useProfile();

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Box paddingX={4} paddingY={1} width='100%' marginRight='auto' marginLeft='auto' maxWidth={1440} display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant='h5'>Ventim</Typography>
        <Avatar src={profile?.photoURL} />
      </Box>
    </Box>
  )
}

export default Header
