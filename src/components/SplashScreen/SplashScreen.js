import { Box, CircularProgress } from '@material-ui/core'
import React from 'react'

const SplashScreen = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' position='absolute' top={0} right={0} left={0} bottom={0} zIndex={9}>
      <CircularProgress />
    </Box>
  )
}

export default SplashScreen
