// import { Box, Button, Divider, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";   
import Divider from "@mui/material/Divider";
import React from 'react'
// import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
// import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
// import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
// import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
// import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
// import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
export default function InfoSection({ profileInfo }) {
    return (
        <>
            <Box bgcolor='white' borderRadius='5px' height='100%' letterSpacing={1} boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px'   >
                <Box bgcolor='#1F485B' textAlign='center' py={2} borderRadius='5px'>
                    <Typography display='inline-block' textAlign='center' variant="h3" color='white'>{profileInfo?.fullName?.split(' ').shift()}'s Information</Typography>
                </Box>
                <Divider />
                <Box display='flex' flexDirection='column'   >

                    <Box display='flex' textAlign='center' textTransform='uppercase' justifyContent='space-around'>
                        <Box width='33%' >

                            <iframe title="animation-profile1" style={{ width: '70%', height: '70%', border: 'none' }} src="https://lottie.host/?file=698c77a1-fbd9-46ef-91f9-17f8e6cc1c7a/gdUTAdUmjI.json"></iframe>
                            <Typography color='#1F485B' fontSize={{ xs: '0.6rem', sm: '1rem', md: '1rem' }}>{profileInfo?.mobileNumber}</Typography>
                        </Box>


                        <Box width='33%'>
                            <iframe title="animation-profile2" style={{ width: '70%', height: '70%', border: 'none' }} src="https://lottie.host/?file=22261125-1018-476f-9e8b-36d54fbb39cf/jUUulvTmLy.json"></iframe>
                            <Typography color='#1F485B' fontSize={{ xs: '0.6rem', sm: '1rem', md: '1rem' }}>{profileInfo?.gender}</Typography>
                        </Box>
                        <Box width='33%'>

                            <iframe title="animation-profile3" style={{ width: '70%', height: '70%', border: 'none' }} src="https://lottie.host/?file=9a0e2d8a-3bc1-43a5-86b5-62dc6706fef9/nCbxXlNVM6.json"></iframe>
                            <Typography color='#1F485B' fontSize={{ xs: '0.6rem', sm: '1rem', md: '1rem' }}>{profileInfo?.birthdate}</Typography>
                        </Box>
                    </Box>


                    <Box display='flex' textAlign='center' textTransform='uppercase' justifyContent='space-around'>
                        <Box width='48%'>
                            <iframe title="animation-profile4" style={{ width: '70%', height: '70%', border: 'none' }} src="https://lottie.host/?file=d9ed5f03-52d5-472a-b9b4-a91bd43fbc5b/rxBuSPJwti.json"></iframe>
                            <Typography color='#1F485B' fontSize={{ xs: '0.6rem', sm: '1rem', md: '1rem' }}>{profileInfo?.emailAddress}</Typography>
                        </Box>


                        <Box width='48%'>
                            <iframe title="animation-profile5" style={{ width: '70%', height: '70%', border: 'none' }} src="https://lottie.host/?file=86022618-bda3-4d3c-a75e-19acdfefe0f8/hw1RxdbUwH.json"></iframe>
                            <Typography color='#1F485B' fontSize={{ xs: '0.6rem', sm: '1rem', md: '1rem' }}>{profileInfo?.maritalStatus}</Typography>
                        </Box>
                    </Box>


                </Box>
            </Box>
        </>
    )
}

// <Box p={2} borderRadius={'15px'} maxHeight='400px' bgcolor='#fff' boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px'>

//     <Typography paddingBottom={2} variant='h6' sx={{ color: '#1F485B' }}>{profileInfo?.fullName?.split(' ').shift()}'s Information</Typography>


//     <Divider />


//     <Button variant='text' sx={{ color: '#1F485B', alignSelf: 'flex-start' }} startIcon={<ContactPhoneOutlinedIcon />} disableRipple>Contact Info</Button>
//     <Box display='flex' justifyContent='space-around'>
//         <Box display='flex' width='50%' justifyContent='center'>
//             <PhoneOutlinedIcon />
//             <Typography variant='body2' sx={{ opacity: '0.8' }}>{profileInfo?.mobileNumber}</Typography>
//         </Box>

//         <Box display='flex' width='50%' justifyContent='center' >
//             <EmailOutlinedIcon />
//             <Typography variant='body2' sx={{ opacity: '0.8' }}>{profileInfo?.emailAddress}</Typography>
//         </Box>
//     </Box>
//     <Button variant='text' sx={{ color: '#1F485B', alignSelf: 'flex-start' }} startIcon={<ConnectWithoutContactOutlinedIcon />} disableRipple>Socials</Button>
//     <Box display='flex' justifyContent='space-around'>
//         <Box display='flex' width='50%' justifyContent='center'>
//             <Box>
//                 <FemaleOutlinedIcon />/<MaleOutlinedIcon />
//             </Box>
//             <Typography variant='body2' sx={{ opacity: '0.8' }}>{profileInfo?.gender}</Typography>
//         </Box>
//         <Box display='flex' width='50%' justifyContent='center'>
//             <FamilyRestroomOutlinedIcon />
//             <Typography variant='body2' sx={{ opacity: '0.8' }}>{profileInfo?.maritalStatus}</Typography>
//         </Box>
//     </Box>

//     <Button variant='text' sx={{ color: '#1F485B', alignSelf: 'flex-start' }} startIcon={<ContactPhoneOutlinedIcon />} disableRipple>Personal Information</Button>
//     <Box display='flex' justifyContent='space-around'>
//         <Box display='flex' width='50%' justifyContent='center'>
//             <CakeOutlinedIcon />
//             <Typography variant='body2' sx={{ opacity: '0.8' }}> {profileInfo?.birthdate}</Typography>
//         </Box>

//         <Box display='flex' width='50%' justifyContent='center'>
//             <ManageAccountsOutlinedIcon />
//             <Typography variant='body2' sx={{ opacity: '0.8' }}>{profileInfo?.race}</Typography>
//         </Box>
//     </Box>
// </Box>