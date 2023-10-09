import { Box, Typography } from '@mui/material'
import React from 'react'
import ChatContactShip from './ChatContactShip'

export default function ChatContactList() {
  return (
    <Box display={{ xs: 'none', sm: 'none', md: 'block' }} width='300px' bgcolor='white' py={3} px={1.5} sx={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}  >
      <Box textAlign='center' marginBottom={4} borderBottom='1.5px solid #1F485B' pb={2} maxWidth='300px' display='flex' gap={1} justifyContent='center' alignItems='center' >
        {/* <iframe style={{ border: 'none', width: '30px', height: '30px' }} title='contact-icon' src="https://lottie.host/?file=17b801a6-35f8-4969-9658-b8ea49c302ed/lXrsaOV1hm.lottie"></iframe> */}
        <iframe style={{ border: 'none', width: '30px', height: '30px' }} title='contact-icon' src="https://lottie.host/?file=17b801a6-35f8-4969-9658-b8ea49c302ed/lXrsaOV1hm.lottie"></iframe>
        <Typography color='medical'>Contacts</Typography>

      </Box>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        height={'70%'}
        overflow='scroll'
        sx={{
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            width: '0.5em',
            display: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
          },
        }}
      >
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
        <ChatContactShip />
      </Box>
    </Box>
  )
}
