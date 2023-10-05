import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import React from 'react'

export default function ProfileHeadSection() {
    return (
        <>
            <Box borderRadius={'15px'} marginBottom={'30px'}  >
                <Typography variant='h5' fontWeight={'700'} sx={{ opacity: 0.8 }}>Hasan's Profile</Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.4 }}>This is your playground!</Typography>
            </Box>


            <Box maxHeight='70%' position='relative' display='flex' boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px' >
                <Button variant='contained' sx={{ position: 'absolute', bottom: '0', right: '0', bgcolor: '#4B6477', ":hover": { bgcolor: '#1F485B' } }} startIcon={<FileUploadOutlinedIcon />}> Change Cover</Button>
                <Avatar
                    sx={{ width: '130px', height: '130px', position: 'absolute', left: '20px', bottom: '-55px' }}
                    src='https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp'

                >
                </Avatar>
                <IconButton size='small' sx={{ position: 'absolute', left: '120px', bottom: '-55px', bgcolor: '#4B6477 ', color: 'white', opacity: "0.9", zIndex: '300', ":hover": { bgcolor: '#1F485Bf9' } }}><FileUploadOutlinedIcon /></IconButton>
                <img style={{ borderRadius: '15px', objectFit: 'cover', width: '100%', maxHeight: '350px' }} alt='cover-img' src='https://www.slideegg.com/image/catalog/700940-PowerPoint%20Background%20Templates%20Medical.png' />
                <Typography variant='h5' position={'absolute'} left='165px' bottom='-45px' color='#1F485B'>Hasan Tommalieh</Typography >
            </Box>
        </>
    )
}
