import { Avatar, Badge, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import profileImg from '../../assets/images/prescriptions/7944895.jpg'
export default function ChatContactShip() {
    let number = 9
    let lastMsg = 'what ever you done, is none of my business'
    return (
        <Box width='100%' display='flex' gap={3} component={Button} color={'medical'} >
            <Avatar src={'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp'} sx={{ width: '40px', height: '40px' }} />
            <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems='flex-start' color='black'  >
                <Typography color='medical' fontSize={'12px'} fontWeight={700}>Hasan Tommalieh</Typography>
                <Typography color='medical' fontWeight='400' fontSize={'12px'} textOverflow='clip'>{lastMsg.substring(0, 19) + '...'}</Typography>
            </Box>
            <Box>
                <Badge badgeContent={number} color='medical' />
            </Box>
        </Box>
    )
}
