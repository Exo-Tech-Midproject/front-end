import React from 'react'
import VitalCard from '../components/Vitals/VitalCard'
// import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

// import oximeterAnimation from '../assets/lottie/oximeter.json'
import vitalsCoverImg from '../assets/images/vitalsPage/VitalsCover.jpg'
// import Lottie from "lottie-react";
// import heartLottieAnimation from "../assets/lottie/Animation - 1696083322490 (1).json";
import VitalsPagination from '../components/Vitals/VitalsPagination';
import VitalsChart from '../components/Vitals/VitalsChart';
import VitalsCreateSection from '../components/Vitals/VitalsCreateSection';


export default function Vitals() {


    return (
        <>
            <Box borderRadius={'15px'} paddingLeft='30px' paddingBottom={2}  >
                <Typography variant='h5' fontWeight={'700'} sx={{ opacity: 0.8 }}>Vitals Record</Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.4 }}>Keep track of your health status.</Typography>
            </Box >


            <VitalsCreateSection />

            <Divider sx={{ marginBottom: '50px' }} />
            <Box
                width={{ xs: '100%', sm: '80%', md: '75%' }}
                // bgcolor={'green'}

                py={8}
                borderRadius={2}
                margin='0 auto '
                marginBottom='10px'
                sx={{
                    background: '#112731FA',
                    backgroundImage: `url(${vitalsCoverImg})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    backgroundPosition: '10%',
                    backgroundBlendMode: 'overlay'
                }}>
                <Typography letterSpacing={2} color='white' variant='h3' textAlign='center'>RECORDS</Typography>

            </Box>
            <Box px={3} mb='30px'>
                {/* <Divider /> */}
                <Grid container padding={2} marginTop={2} rowGap={3}>
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
                    {/* <Grid item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
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
                    </Grid> */}


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
