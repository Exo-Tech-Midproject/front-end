import { Box,  Stack,  Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar'


export default function PostHeader({getGroup }) {

  return (
    <Stack sx={{
      width:"85%",
      margin:'auto',
    }}>
    <Box 
      width='90%' 
        height='70px'
        display='flex' 
        justifyContent='center' 
        alignItems={'center'} 
        sx={{ 
        margin:"1% auto",
        }}>
            <Typography variant='h1' color={"#062942"} sx={{
              paddingTop:"25px"
            }}> 
            {getGroup.groupName}
            </Typography>
              
    </Box >
    <Box 
    display='flex' 
    justifyContent='start' 
    alignItems={'center'} >
    <Avatar src=
      {getGroup && getGroup.Maker && getGroup.Maker.profileImg} 
            sx={{
              width:"100px",
              height:"100px",
              marginRight:"2%"
            }}/>
            <Typography fontSize='2.7rem' color={"#1F485B"}>
            {getGroup && getGroup.Maker && getGroup.Maker.fullName}
            </Typography>
    </Box>
    </Stack>
  )
}
