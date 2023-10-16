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
import UploadPfpCardModal from "./UploadPfpModal";
import UploadPfpModal from "./UploadPfpModal";
import UploadCoverModal from "./UploadCover";
let DBRUL = process.env.REACT_APP_BASE_URL

export default function ProfileHeadSection({ getProfileInfo, profileInfo, setProfileInfo }) {
    const [selectedFile, setSelectedFile] = useState(null)
    const [selectedCover, setSelectedCover] = useState(null)
    // const [profileInfo, setProfileInfo] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    let token = cookie.load('auth')
    const payload = jwtDecode(token)
    const handleImageChange = (event) => {
        setSelectedFile(event.target.files[0]);


    };
    const handleCoverChange = (event) => {
        setSelectedCover(event.target.files[0]);


    };

    function handleShowModal() {
        setShowModal(true)
    }
    function handleCloseModal() {
        setShowModal(false)
    }
    function handleShowModal2() {
        setShowModal2(true)
    }
    function handleCloseModal2() {
        setShowModal2(false)
    }
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);
        try {
            const response = await axios.post(`${DBRUL}/${payload.accountType}/${payload.username}/uploadpfp`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },

            });
            setProfileInfo(getProfileInfo())
            console.log('Image uploaded successfully:', response.data);
            handleCloseModal()
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    const handleUploadCover = async () => {
        const formData = new FormData();
        formData.append('image', selectedCover);
        try {
            const response = await axios.post(`${DBRUL}/${payload.accountType}/${payload.username}/uploadcover`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },

            });
            setProfileInfo(getProfileInfo())
            console.log('Image uploaded successfully:', response.data);
            handleCloseModal2()
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };



    // useEffect(() => {
    //     getProfileInfo()
    // }, [profileInfo])
    return (
        <>
            <Box borderRadius={'15px'} marginBottom={'30px'}  >
                <Typography variant='h5' fontWeight={'700'} sx={{ opacity: 0.8 }}>{profileInfo?.fullName?.split(' ').shift()}'s Profile</Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.4 }}>This is your playground!</Typography>
            </Box>


            <Box maxHeight='70%' position='relative' display='flex' boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px' >
                <Button onClick={handleShowModal2} variant='contained' sx={{ position: 'absolute', bottom: '-34px', right: '0', bgcolor: '#4B6477', ":hover": { bgcolor: '#1F485B' } }} startIcon={<FileUploadOutlinedIcon />}> Change Cover</Button>
                <Avatar
                    sx={{ width: '130px', height: '130px', position: 'absolute', left: '20px', bottom: '-80px', border: 'solid 2px #1F485BAA' }}
                    src={profileInfo?.profileImg || 'https://cdn5.vectorstock.com/i/1000x1000/27/89/user-account-flat-icon-vector-14992789.jpg'}

                >
                </Avatar>

                <IconButton onClick={handleShowModal} size='small' sx={{ position: 'absolute', left: '120px', bottom: '-80px', bgcolor: '#4B6477 ', color: 'white', opacity: "0.9", zIndex: '300', ":hover": { bgcolor: '#1F485Bf9' } }}><FileUploadOutlinedIcon /></IconButton>
                <img style={{ borderRadius: '15px', objectFit: 'cover', width: '100%', height: '300px' }} alt='cover-img' src={profileInfo?.coverImg || 'https://www.slideegg.com/image/catalog/700940-PowerPoint%20Background%20Templates%20Medical.png'} />
                <Typography variant='h5' position={'absolute'} left='165px' bottom='-65px' color='#1F485B'>{profileInfo?.fullName}</Typography >
            </Box>
            <UploadPfpModal handleImageChange={handleImageChange} showModal={showModal} handleCloseModal={handleCloseModal} handleUpload={handleUpload} />
            <UploadCoverModal handleCoverChange={handleCoverChange} showModal2={showModal2} handleCloseModal2={handleCloseModal2} handleUploadCover={handleUploadCover} />
        </>
    )
}
