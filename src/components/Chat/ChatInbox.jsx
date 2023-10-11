import Box from "@mui/material/Box";
import React from 'react'
import ChatInboxHead from './ChatInboxHead'
import Message from './Message'
import ChatTypingBox from './ChatTypingBox'


export default function ChatInbox() {
  return (
    <Box width='100%' bgcolor='#f2f5f9' display='flex' border=' 2px white solid' flexDirection='column' 
    sx={{
       borderBottomRightRadius: '30px',
       
        }}>
      <ChatInboxHead />
      <Box overflow='scroll' paddingX={2} display='flex' flexDirection='column' gap={4} >
        <Message name='Hasan' />
        <Message name='Anas' />
        <Message name='Hasan' />
        <Message name='Hasan' />
        <Message name='Anas' />
        <Message name='Hasan' />
      </Box>
      <ChatTypingBox />
    </Box>
  )
}
