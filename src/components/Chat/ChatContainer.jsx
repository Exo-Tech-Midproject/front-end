import { Box } from '@mui/material'
import React from 'react'
import ChatContactList from './ChatContactList'
import ChatInbox from './ChatInbox'
import ChatTypingBox from './ChatTypingBox'

export default function ChatContainer() {
  return (
    <div>
      <Box height='calc(100vh - 105px)' display='flex'
        sx={
          {
            boxShadow:'0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'

            // boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
          }
        }>
        <ChatContactList />
        <ChatInbox />

      </Box>
    </div>
  )
}
