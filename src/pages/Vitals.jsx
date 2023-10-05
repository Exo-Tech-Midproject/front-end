import React from 'react'
import VitalCard from '../components/Vitals/VitalCard'
// import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

// import oximeterAnimation from '../assets/lottie/oximeter.json'

// import Lottie from "lottie-react";
// import heartLottieAnimation from "../assets/lottie/Animation - 1696083322490 (1).json";
import VitalsPagination from '../components/Vitals/VitalsPagination';
import VitalsChart from '../components/Vitals/VitalsChart';


export default function Vitals() {


    return (
        <>
            <Box borderRadius={'15px'} paddingLeft='30px' paddingBottom={2}  >
                <Typography variant='h5' fontWeight={'700'} sx={{ opacity: 0.8 }}>Vitals Record</Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.4 }}>Keep track of your health status.</Typography>
            </Box >


            <Box
                width='100%'
                // bgcolor={'green'}
                px={15}
                py={18}
                borderRadius={2}
                margin='0 auto '
                marginBottom='30px'
                sx={{
                    background: '#075239F1',
                    backgroundImage: 'url("https://domf5oio6qrcr.cloudfront.net/medialibrary/8627/medicine-cardio-vital-signs.jpg")',
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    // objectFit: 'cover',
                    backgroundPosition: '20% 5%',
                    backgroundBlendMode: 'overlay'
                }}>


            </Box>

            <Divider sx={{ marginBottom: '20px' }} />
            <Box px={3} mb='30px'>
                {/* <Divider /> */}
                <Grid container padding={2} marginTop={4} rowGap={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard />
                    </Grid>


                </Grid >
            </Box>
            <Container sx={{ marginBottom: '30px' }}>
                <VitalsPagination />
                {/* <Box width='100px'>
                    <Lottie animationData={heartLottieAnimation} />
                    <Lottie animationData={oximeterAnimation} />

                </Box> */}
            </Container>

            <Divider />

            <VitalsChart data={'data'} />
        </>
    )
}
