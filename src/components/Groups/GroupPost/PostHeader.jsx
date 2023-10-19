import { Box,  Stack,  Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import { LoginContext } from "../../../ContextApi/Auth";


export default function PostHeader({getGroup }) {

  const { user } = React.useContext(LoginContext)


  return (
    <Stack sx={{
      width:"85%",
      margin:'auto'
    }}>
    <Box 
      width='90%' 
        height='70px'
        display='flex' 
        justifyContent='center' 
        alignItems={'center'} 
        sx={{ 
        margin:"1% auto",
        // bgcolor:"red"
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
    <Avatar src= {getGroup.groupImage || "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp"}  
            sx={{
              width:"100px",
              height:"100px",
              marginRight:"2%"
            }}/>
            <Typography fontSize='2.7rem' color={"#1F485B"}>{getGroup.physicianUN}</Typography>
    </Box>
    </Stack>
  )
}
