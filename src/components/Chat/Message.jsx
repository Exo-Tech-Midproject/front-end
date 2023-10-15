// import { Avatar, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from '../../ContextApi/Auth';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';

export default function Message({ name, msg }) {
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
    const who = {
        name: name,
        pic: 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp'
    }
    const reciever = {
        name: name,
        pic: 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzJfMTY2NzUzNzYxOF8wNDY/screen-2.webp?fakeurl=1&type=.webp'
    }
    return (
        <Box display='flex' maxWidth='100%'  gap={2} alignItems='flex-end' flexWrap='wrap' flexDirection={msg.sender === payload.username ? 'row-reverse' : 'row'}  >
            10:30am
            <Avatar src={who.name === payload.username ? who.pic : reciever.pic} />
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
