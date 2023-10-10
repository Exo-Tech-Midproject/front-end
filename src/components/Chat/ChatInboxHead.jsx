import { Avatar, Badge, Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

export default function ChatInboxHead() {
  return (
    <Box width='100%' height='70px' display='flex' justifyContent='space-between' alignItems={'center'} bgcolor='white' sx={{ borderTopRightRadius: '7px' }}>
      <Box display='flex' justifyContent='center' alignContent='center' padding={3} gap={3} >
        <Avatar sx={{ width: '50px', height: '50px' }} src='https://wallpapers.com/images/hd/cool-profile-picture-awled9dwo4qq2yv2.jpg' />
        <Box display='flex' flexDirection='column' justifyContent='center'>
          <Typography fontWeight='700'>Anas Nemrawi</Typography>
        </Box>
      </Box>
      <Box bgcolor='#2EEDAE' textAlign='center' paddingY={1} px={3} borderRadius='30px' alignSelf='center'>
        <Typography fontWeight='700' fontSize={'0.95rem'}>Online</Typography>
      </Box>
      <Box display='flex' padding={3} gap={3}>
        <IconButton>
          <CallOutlinedIcon />
        </IconButton>
        <IconButton>
          <InfoOutlinedIcon />
        </IconButton>
        <IconButton>
          <ReportGmailerrorredOutlinedIcon />
        </IconButton>
      </Box>
      {/* <Box></Box> */}
    </Box >
  )
}
