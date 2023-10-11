// import { Box, Button, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Lottie from 'lottie-react'
import React, { useState } from 'react'
import doctorAnimation from '../../assets/lottie/doctorVital.json'
import VitalsRangesBanner from './VitalsRangesBanner'
import AddVitalsModal from './AddVitalsModal';
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL
export default function VitalsCreateSection({ vitals, setVitals }) {
    const [showCreateModal, setShowCreateModal] = useState(false)

    function handleShowCreateModal() {
        setShowCreateModal(true)
    }
    function handleCloseCreateModal() {
        setShowCreateModal(false)
    }

    async function handleCreateCard(obj) {
        try {
            let token = cookie.load('auth')
            const payload = await jwtDecode(token)
            let userVitals = await axios.post(`${DBRUL}/patient/${payload.username}/vitals`, obj,
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
            console.log(userVitals.data, '2323231')
            setVitals([...vitals, userVitals.data])
            console.log(vitals, 'from create function')
            handleCloseCreateModal()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Box width='100%' height={{ xs: '200px', sm: '350px', md: '500px' }} display='flex' justifyContent={'center'} bgcolor='white' borderRadius={'20px'} padding={2}>
                <Box width={{ xs: '50%', sm: '55%', md: '60%' }} textAlign='center' display='flex' flexDirection={'column'} gap={{ xs: 3, sm: 4, md: 5 }} justifyContent={'center'} >
                    <Typography fontSize={{ xs: '1.25rem', sm: '2.125rem', md: '3.75rem' }} m='0 auto'  >
                        Watch Your Life Better
                    </Typography>
                    <Typography fontSize={{ xs: '.75rem', sm: '1rem', md: '2.125rem' }} m='0 auto'  >
                        Normal ranges for each parameter
                    </Typography>
                    <VitalsRangesBanner />
                </Box>
                <Box width={{ xs: '50%', sm: '45%', md: '55%' }} alignItems='center' justifyContent='center'>

                    <Lottie
                        loop={true}
                        animationData={doctorAnimation} style={{ width: '100%', height: '100%' }}
                    />

                </Box>

            </Box >
            <Box display='flex' justifyContent={'center'} position='relative'>
                <Button onClick={handleShowCreateModal} variant='contained' color='medical' sx={{ alignSelf: 'center', position: 'relative', bottom: { xs: '15px', sm: '25px', md: '35px' }, width: { xs: '50%', md: '50%' }, height: { xs: '30px', sm: '50px', md: '70px' }, fontSize: { xs: '0.7rem', sm: '1rem', md: '2rem' } }}>Add New Record</Button>

            </Box >
            <AddVitalsModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} handleCloseCreateModal={handleCloseCreateModal} handleCreateCard={handleCreateCard} />
        </>
    )
}
