// import { Box, Stack, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from 'react'
// import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import PrescriptionCard from './PrescriptionCard';

export default function PrescriptionsSection() {
    return (
        <Box minHeight='100%' borderRadius={'15px'} bgcolor={'#fff'} boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px'>
            <Stack padding={2} gap={2} >
                <Box
                    padding={5}
                    borderRadius='13px'
                    boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px'
                    sx={{

                        background: '#112731B0',
                        backgroundImage: 'url("https://www.verywellhealth.com/thmb/8rLVNyLCxDWMWcghCgbt3Kt8m6Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prescription-56ad9f2a5f9b58b7d00b43f8.jpg")',
                        backgroundSize: '100% auto',
                        backgroundRepeat: 'no-repeat',
                        objectFit: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}>
                    <Typography variant='h6' color='white' textAlign='center'>Recent Prescriptions</Typography>
                </Box>
                <Box maxHeight='300px' overflow='auto' paddingLeft={2.5} sx={{
                    scrollbarWidth: 'none',
                    '-ms-overflow-style': 'none',
                    '&::-webkit-scrollbar': {
                        width: '0.5em',
                        display: 'none',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'transparent',
                    },
                }}>
                    <Stack gap={0.5} width='95%' alignSelf='center' >
                        <PrescriptionCard />
                        <PrescriptionCard />
                        <PrescriptionCard />
                        <PrescriptionCard />
                        <PrescriptionCard />
                    </Stack>
                </Box>
            </Stack >
        </Box >
    )
}
