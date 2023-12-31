import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import ChatContactShip from './ChatContactShip'

export default function ChatContactList({ contacts, setWithWho, }) {
  const [activeChat, setActiveChat] = useState('')
  // const [activeImg, setActiveImg] = useState('')


  function handleSelectContact(withName, activeName,activeImg) {
    setWithWho(withName)
    setActiveChat(activeName)
    // activeImg(activeImg)
  }
  // const [activeChat, setActiveChat]= useState('')
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
        {contacts.map(element => (<ChatContactShip person={element} handleSelectContact={handleSelectContact} activeChat={activeChat} />))}
        {/* <ChatContactShip name={'Hasan tommalieh'} setActiveChat={setActiveChat} activeChat={activeChat}  />
        <ChatContactShip name={'Anas Nemrawi'} setActiveChat={setActiveChat} activeChat={activeChat}  />
        <ChatContactShip name={'Abdullah Aljoulani'} setActiveChat={setActiveChat} activeChat={activeChat}  />
        <ChatContactShip name={'Tasneem Hassassneh'} setActiveChat={setActiveChat} activeChat={activeChat}  /> */}


      </Box>
    </Box>
  )
}
