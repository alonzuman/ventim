import { Box, Divider, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

const MyGroupsHeader = () => {
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);

  const handleClick = () => setIsCreatingGroup(!isCreatingGroup);

  return (
    <Box zIndex={9} bgcolor='#fff' position='sticky' top='0'>
      <Box paddingY={1} paddingX={2} display='flex' alignItems='center' justifyContent='space-between'>
        <Typography className='myGroups__title' variant='h6'>My Groups</Typography>
        <IconButton onClick={handleClick}>
          <AddIcon />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  )
}

export default MyGroupsHeader
