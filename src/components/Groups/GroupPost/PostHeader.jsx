import { Box,  Stack,  Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar'


export default function PostHeader() {

  return (
    <Stack>
    <Box width='90%' 
        height='70px'
        display='flex' 
        justifyContent='center' 
        alignItems={'center'} 
        sx={{ 
        margin:"1% auto",
        // bgcolor:"red"
        }}>
            <Typography fontSize='3rem' color={"#1F485B"}>Group Name </Typography>
              
    </Box >
    <Box 
    display='flex' 
    justifyContent='start' 
    alignItems={'center'} 
    sx={{
      marginLeft:"5%"
    }}>
    <Avatar src= 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp' 
            sx={{
              width:"120px",
              height:"120px",
              marginRight:"2%"
            }}/>
            <Typography fontSize='2.3rem' color={"#1F485B"}>Physician Name </Typography>
    </Box>
    </Stack>
  )
}
