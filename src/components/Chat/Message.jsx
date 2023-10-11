// import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";


export default function Message({ name }) {
    const style1 = {
        borderTopRightRadius: '30px',
        borderBottomLeftRadius: '30px'
    }
    const style2 = {
        borderTopLeftRadius: '30px',
        borderBottomRightRadius: '30px'
    }
    let msg = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur minus, fugit, nam cupiditate omnis ratione officia fugiat assumenda, quaerat harum libero tempora esse magnam beatae vel repellendus. Vel, optio?`
    const who = {
        name: name,
        pic: 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp'
    }
    const reciever = {
        name: name,
        pic: 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzJfMTY2NzUzNzYxOF8wNDY/screen-2.webp?fakeurl=1&type=.webp'
    }
    return (
        <Box display='flex' gap={2} alignItems='flex-end' flexWrap='wrap' flexDirection={name === 'Hasan' ? 'row-reverse' : 'row'}  >
            10:30am
            <Avatar src={who.name === 'Hasan' ? who.pic : reciever.pic} />
            <Box
                display='flex'
                sx={
                    name === 'Hasan' ? style1 : style2
                }
                flexWrap='wrap'
                p={4}
                bgcolor={who.name === 'Hasan' ? '#1F485B' : 'white'}
                maxWidth={{ xs: '100%', sm: '90%', md: '50%' }}
                color={who.name === 'Hasan' ? 'white' : '#1F485B'}>

                <Typography textOverflow='clip'>{msg}</Typography>

            </Box>
        </Box>
    )
}
