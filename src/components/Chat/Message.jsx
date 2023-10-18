// import { Avatar, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from '../../ContextApi/Auth';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';

export default function Message({ name, msg, time, withWho }) {
    console.log(withWho, time)
    const date = new Date(time);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12; // if the hour is 0, it should be 12
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`
    const { user } = useContext(LoginContext)
    let token = cookie.load('auth')
    let payload = jwtDecode(token)
    // console.log(user, msg, 'HEEEEERE I AM')
    const style1 = {
        borderTopRightRadius: '30px',
        borderBottomLeftRadius: '30px',
        overflowWrap: 'break-word'
    }
    const style2 = {
        borderTopLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        overflowWrap: 'break-word'
    }
    // let msg = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur minus, fugit, nam cupiditate omnis ratione officia fugiat assumenda, quaerat harum libero tempora esse magnam beatae vel repellendus. Vel, optio?`


    return (
        <Box display='flex' maxWidth='100%' gap={2} alignItems='flex-end' flexWrap='wrap' flexDirection={msg.sender === payload.username ? 'row-reverse' : 'row'}  >
            {timeString}
            <Avatar src={name === payload.username ? user.profileImg : withWho.profileImg} />
            <Box
                // overflow='auto'

                display='flex'
                sx={
                    msg.sender === payload.username ? style1 : style2


                }
                flexWrap='wrap'
                p={4}
                bgcolor={msg.sender === payload.username ? '#1F485B' : 'white'}
                maxWidth={{ xs: '100%', sm: '90%', md: '50%' }}
                color={msg.sender === payload.username ? 'white' : '#1F485B'}>

                <Typography textOverflow='clip'
                    overflow={'auto'}
                    sx={{ wordBreak: 'break-all' }}>{msg.message}</Typography>

            </Box>
        </Box>
    )
}
