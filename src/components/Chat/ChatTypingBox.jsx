import { Send } from '@mui/icons-material'
import { Box, IconButton, TextField, TextareaAutosize } from '@mui/material'
import React from 'react'


export default function ChatTypingBox() {
  return (
    <Box display='flex'>
      <Box width='97%' display='flex' bgcolor='white' >
        <TextField fullWidth>'Type your message here...'</TextField>
      </Box>
      <IconButton color='medical'><Send color='#1F485B' /></IconButton>
    </Box>
  )
}
