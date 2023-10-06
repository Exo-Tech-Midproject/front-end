import { Box, Button, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import React from 'react'
import doctorAnimation from '../../assets/lottie/doctorVital.json'
import VitalsRangesBanner from './VitalsRangesBanner'

export default function VitalsCreateSection() {
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
                <Button variant='contained' color='medical' sx={{ alignSelf: 'center', position: 'relative', bottom: { xs: '15px', sm: '25px', md: '35px' }, width: { xs: '50%', md: '50%' }, height: { xs: '30px', sm: '50px', md: '70px' } }}>Add New Record</Button>
                {/* <Box
                    borderRadius={'22px'}
                    position='relative'
                    bottom='30px'
                    width={'60%'}
                    height='100%'
                    bgcolor='#1F485B'
                    m="0 auto"
                    sx={{
                        ':hover': {
                            boxShadow: '1px 3px 1px',
                            transition: '1s ease-in-out',
                            cursor: 'pointer',

                        }
                    }}
                >
                    <Typography textAlign='center' color='white' variant='h4' lineHeight='100px'>Add New Record</Typography>
                </Box> */}
            </Box >
        </>
    )
}
