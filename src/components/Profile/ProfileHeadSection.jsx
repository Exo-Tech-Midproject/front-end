// import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL

export default function ProfileHeadSection() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [profileInfo, setProfileInfo] = useState(null)
    let token = cookie.load('auth')
    const payload = jwtDecode(token)
    const handleImageChange = (event) => {
        setSelectedFile(event.target.files[0]);


    };
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);
        try {
            const response = await axios.post(`http://localhost:5000/patient/${payload.username}/uploadpfp`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },

            });
            setProfileInfo(getProfileInfo())
            console.log('Image uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const getProfileInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/patient/${payload.username}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            let data = response.data
            setProfileInfo(data)
            return data
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

    useEffect(() => {
        getProfileInfo()
    }, [])
    return (
        <>
            <Box borderRadius={'15px'} marginBottom={'30px'}  >
                <Typography variant='h5' fontWeight={'700'} sx={{ opacity: 0.8 }}>{profileInfo?.fullName?.split(' ').shift()}'s Profile</Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.4 }}>This is your playground!</Typography>
            </Box>


            <Box maxHeight='70%' position='relative' display='flex' boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px' >
                <Button variant='contained' sx={{ position: 'absolute', bottom: '0', right: '0', bgcolor: '#4B6477', ":hover": { bgcolor: '#1F485B' } }} startIcon={<FileUploadOutlinedIcon />}> Change Cover</Button>
                <Avatar
                    sx={{ width: '130px', height: '130px', position: 'absolute', left: '20px', bottom: '-55px' }}
                    src={profileInfo?.profileImg || 'https://cdn5.vectorstock.com/i/1000x1000/27/89/user-account-flat-icon-vector-14992789.jpg'}

                >
                </Avatar>
                <input onChange={handleImageChange} type='file' />
                <IconButton onClick={handleUpload} size='small' sx={{ position: 'absolute', left: '120px', bottom: '-55px', bgcolor: '#4B6477 ', color: 'white', opacity: "0.9", zIndex: '300', ":hover": { bgcolor: '#1F485Bf9' } }}><FileUploadOutlinedIcon /></IconButton>
                <img style={{ borderRadius: '15px', objectFit: 'cover', width: '100%', maxHeight: '350px' }} alt='cover-img' src='https://www.slideegg.com/image/catalog/700940-PowerPoint%20Background%20Templates%20Medical.png' />
                <Typography variant='h5' position={'absolute'} left='165px' bottom='-45px' color='#1F485B'>Hasan Tommalieh</Typography >
            </Box>
        </>
    )
}
