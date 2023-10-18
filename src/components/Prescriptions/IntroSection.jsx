// import { Box, Button, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Lottie from 'lottie-react'
import React, { useContext, useState } from 'react'
import AddPrescModal from "./AddPrescModal";
import AuthPhysician from "../Auths/AuthPhysician";
import { LoginContext } from "../../ContextApi/Auth";
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
// import doctorAnimation from '../../assets/lottie/doctorVital.json'
// import VitalsRangesBanner from './VitalsRangesBanner'

export default function IntroSection({ setPrescription, prescription, fetchUserPrescriptions }) {
    const { user } = useContext(LoginContext)
    const [showPresModal, setShowPrescModal] = useState(false)

    let token = cookie.load('auth')
    let payload
    if (token) {

        payload = jwtDecode(token)
    }

    function handleShowOrescModal() {
        setShowPrescModal(true)
    }
    function handleClosePrescModal() {
        setShowPrescModal(false)
    }
    return (
        <>
            <Box width='100%' height={{ xs: '200px', sm: '350px', md: '500px' }} display='flex' justifyContent={'center'} bgcolor='white' borderRadius={'20px'} padding={2} mb={payload?.accountType === 'physician' ? '0px' : '30px'}>
                <Box width={{ xs: '50%', sm: '45%', md: '55%' }} alignItems='center' justifyContent='center'>
                    <iframe style={{ width: '100%', height: '100%', border: 'none' }} title="doctor-a" src="https://lottie.host/?file=bdd0ec42-6ed1-4ac9-b4b1-2d8a17e779e7/leJvXymMZL.lottie"></iframe>


                </Box>
                <Box width={{ xs: '50%', sm: '55%', md: '60%' }} textAlign='center' display='flex' flexDirection={'column'} gap={{ xs: 1, sm: 2, md: 3 }} justifyContent={'center'} >
                    <Typography fontSize={{ xs: '1.25rem', sm: '2.125rem', md: '3.75rem' }} m='0 auto'  >
                        It Starts With One Pill
                    </Typography>
                    <Typography fontSize={{ xs: '.75rem', sm: '1rem', md: '2.125rem' }} m='0 auto' sx={{ textDecoration: 'underline', textDecorationColor: '#1F485BBA' }}  >
                        Important Tips
                    </Typography>
                    <Typography letterSpacing={0.2} color={`#1F485BBA`} variant="subtitle2" fontSize={{ xs: '.45rem', sm: '0.75rem', md: '1.125rem' }} m='0 auto'  >
                        • Follow the instructions of your doctor carefully.<br />
                        • Feel free to ask how to use your medications.<br />
                        • Even if you felt well, that doesn't mean you can stop.

                    </Typography>


                </Box>

                <Box width={{ xs: '50%', sm: '45%', md: '55%' }} alignItems='center' justifyContent='center'>
                    <iframe style={{ width: '100%', height: '100%', border: 'none' }} title="doctor-b" src="https://lottie.host/?file=66da91ec-6818-4774-ba93-29547a8fdc73/jvDxWcLzyD.lottie"></iframe>



                </Box>
            </Box >
            <AuthPhysician>
                <Box display='flex' justifyContent={'center'} position='relative'>
                    <Button
                        onClick={handleShowOrescModal}
                        variant='contained'
                        color='medical'
                        sx={{
                            alignSelf: 'center',
                            position: 'relative',
                            bottom: { xs: '15px', sm: '25px', md: '35px' },
                            width: { xs: '50%', md: '50%' },
                            height: { xs: '30px', sm: '50px', md: '70px' },
                            fontSize: { xs: '0.7rem', sm: '1rem', md: '2rem' }
                        }}
                    >
                        Add Prescription
                    </Button>
                </Box >
            </AuthPhysician>
            <AddPrescModal fetchUserPrescriptions={fetchUserPrescriptions} showModal={showPresModal} prescription={prescription} handleClosePrescModal={handleClosePrescModal} setPrescription={setPrescription} />

        </>
    )
}
