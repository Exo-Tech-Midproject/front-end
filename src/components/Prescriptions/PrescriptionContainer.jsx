import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IntroSection from './IntroSection';
import PrescriptionsSection from './PrescriptionsSection';
import VitalsChart from '../Vitals/VitalsChart';
export default function PrescriptionContainer() {
    return (
        <>
            <Box borderRadius={'15px'} paddingLeft='30px' paddingBottom={2}  >
                <Typography variant='h5' fontWeight={'700'} sx={{ opacity: 0.8 }}>Prescription</Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.4 }}>The recipe to get better.</Typography>
            </Box >
            <IntroSection />
            <PrescriptionsSection />
            <VitalsChart/>
        </>
    )
}
