import  Send  from '@mui/icons-material/Send'
// import { Box, IconButton, TextField } from '@mui/material'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

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
