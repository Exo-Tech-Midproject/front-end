// import { Avatar,  Box, IconButton, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

export default function ChatInboxHead({ withWho }) {
  return (
    <Box width='100%' p={4} height='70px' display='flex' justifyContent='space-between' alignItems={'center'} bgcolor='white' sx={{ borderTopRightRadius: '7px' }}>
      <Box display='flex' alignItems='center' gap={2} minWidth={'20%'}>
        <Avatar sx={{ width: { xs: '40px', sm: '40px', md: '50px' }, height: { xs: '40px', sm: '40px', md: '50px' } }} src='https://wallpapers.com/images/hd/cool-profile-picture-awled9dwo4qq2yv2.jpg' />
        {/* <Box > */}
        <Typography fontSize={{ xs: '0.8rem', sm: '1', md: '1.25rem' }} fontWeight='700'>{withWho?.fullName}</Typography>
        {/* </Box> */}
      </Box>
      <Box display='flex'>
        <Box paddingY={1} px={3} borderRadius='30px' display='flex' bgcolor='green' alignItems='center'>
          <Typography textAlign='center' sx={{ fontSize: { xs: '0.7rem', md: '1.25rem' } }} color='white' fontWeight='700' fontSize={'0.95rem'}>Online</Typography>
        </Box>
        <IconButton>
          <CallOutlinedIcon sx={{ fontSize: { xs: '0.8rem', sm: '1.25rem', md: '2.00rem' } }} />
        </IconButton>
        <IconButton>
          <InfoOutlinedIcon sx={{ fontSize: { xs: '0.8rem', sm: '1.25rem', md: '2.00rem' } }} />
        </IconButton>
        <IconButton>
          <ReportGmailerrorredOutlinedIcon sx={{ fontSize: { xs: '0.8rem', sm: '1.25rem', md: '2.00rem' } }} />
        </IconButton>
      </Box>
      {/* <Box></Box> */}
    </Box >
  )
}
