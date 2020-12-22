import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import MyGroups from '../MyGroups/MyGroups'

const Home = () => {
  return (
    <Box display='flex'>
      <Box flex={6}>
        <Typography variant='h3'>Main</Typography>
      </Box>
      <Box flex={4}>
        <MyGroups />
      </Box>
    </Box>
  )
}

export default Home
