import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
export default function InfoSection() {
    return (
        <>
            <Box p={2} borderRadius={'15px'} maxHeight='400px' bgcolor='#fff' boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px'>

                <Typography paddingBottom={2} variant='h6' sx={{ color: '#1F485B' }}>Hasan's Information</Typography>


                <Divider />


                <Button variant='text' sx={{ color: '#1F485B', alignSelf: 'flex-start' }} startIcon={<ContactPhoneOutlinedIcon />} disableRipple>Contact Info</Button>
                <Box display='flex' justifyContent='space-around'>
                    <Box display='flex' width='50%' justifyContent='center'>
                        <PhoneOutlinedIcon />
                        <Typography variant='body2' sx={{ opacity: '0.8' }}>0786610201</Typography>
                    </Box>

                    <Box display='flex' width='50%' justifyContent='center' >
                        <EmailOutlinedIcon />
                        <Typography variant='body2' sx={{ opacity: '0.8' }}>Haznto@gmail.com</Typography>
                    </Box>
                </Box>
                <Button variant='text' sx={{ color: '#1F485B', alignSelf: 'flex-start' }} startIcon={<ConnectWithoutContactOutlinedIcon />} disableRipple>Socials</Button>
                <Box display='flex' justifyContent='space-around'>
                    <Box display='flex' width='50%' justifyContent='center'>
                        <Box>
                            <FemaleOutlinedIcon />/<MaleOutlinedIcon />
                        </Box>
                        <Typography variant='body2' sx={{ opacity: '0.8' }}>Male</Typography>
                    </Box>
                    <Box display='flex' width='50%' justifyContent='center'>
                        <FamilyRestroomOutlinedIcon />
                        <Typography variant='body2' sx={{ opacity: '0.8' }}>Single</Typography>
                    </Box>
                </Box>

                <Button variant='text' sx={{ color: '#1F485B', alignSelf: 'flex-start' }} startIcon={<ContactPhoneOutlinedIcon />} disableRipple>Personal Information</Button>
                <Box display='flex' justifyContent='space-around'>
                    <Box display='flex' width='50%' justifyContent='center'>
                        <CakeOutlinedIcon />
                        <Typography variant='body2' sx={{ opacity: '0.8' }}> 08-04-1998</Typography>
                    </Box>

                    <Box display='flex' width='50%' justifyContent='center'>
                        <ManageAccountsOutlinedIcon />
                        <Typography variant='body2' sx={{ opacity: '0.8' }}>Patient</Typography>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
