// import { Avatar, Badge, Button, Typography } from '@mui/material'
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box'
import React from 'react'
// import profileImg from '../../assets/images/prescriptions/7944895.jpg'
export default function ChatContactShip({ handleSelectContact, activeChat, person }) {

    let number = 9
    let lastMsg = 'what ever you done, is none of my business'
    return (
        <Box

            width='100%'
            display='flex'
            gap={3}
            component={Button}
            color={'medical'}
            bgcolor={person.username === activeChat ? '#1F485B88' : 'white'}
            onClick={() => handleSelectContact(person, person.username)}  >
            <Avatar src={person.profileImg || 'https://cdn5.vectorstock.com/i/1000x1000/27/89/user-account-flat-icon-vector-14992789.jpg'} sx={{ width: '40px', height: '40px' }} />
            <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems='flex-start' color='black'  >
                <Typography color='medical' fontSize={'12px'} fontWeight={700}>{person?.fullName}</Typography>
                <Typography color='medical' fontWeight='400' fontSize={'12px'} textOverflow='clip'>{lastMsg.substring(0, 19) + '...'}</Typography>
            </Box>
            <Box>
                <Badge badgeContent={number} color='medical' />
            </Box>
        </Box >
    )
}
