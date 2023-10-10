import { Box,  Typography } from '@mui/material'
import React from 'react'

export default function PostHeader() {
  return (
    <Box width='90%' 
        height='70px'
        display='flex' 
        justifyContent='center' 
        alignItems={'center'} 
        sx={{ 
        margin:".5% auto",
        // bgcolor:"red"
        }}>
            <Typography fontSize='2rem'>Physician Name </Typography>
    </Box >
  )
}
