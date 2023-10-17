import React, { useEffect, useState } from 'react'
import VitalCard from '../components/Vitals/VitalCard'
// import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import cookie from 'react-cookies'
// import oximeterAnimation from '../assets/lottie/oximeter.json'
import vitalsCoverImg from '../assets/images/vitalsPage/VitalsCover.jpg'
// import Lottie from "lottie-react";
// import heartLottieAnimation from "../assets/lottie/Animation - 1696083322490 (1).json";
import VitalsPagination from '../components/Vitals/VitalsPagination';
import VitalsChart from '../components/Vitals/VitalsChart';
import VitalsCreateSection from '../components/Vitals/VitalsCreateSection';
import axios from 'axios';
import jwtDecode from "jwt-decode";

let DBRUL = process.env.REACT_APP_BASE_URL



export default function Vitals() {
    const [vitals, setVitals] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    // console.log(currentPage)
    let descending = vitals?.sort((a, b) => b.id - a.id)
    // console.log(descending)
    // console.log(vitals)
    let startIndex = 4 * (currentPage - 1)
    let endIndex = startIndex + 4
    let currentPageRender = vitals ? vitals.slice(startIndex, endIndex) : []
    let PaginationPages = Math.ceil(vitals?.length / 4)

    async function fetchUserVitals() {
        try {

            let token = cookie.load('auth')
            const payload = await jwtDecode(token)
            if (payload?.accountType === 'patient') {

                let userVitals = await axios.get(`${DBRUL}/patient/${payload.username}/vitals`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                setVitals(userVitals.data)
            } else if (payload?.accountType === 'physician') {
                let userVitals = await axios.get(`${DBRUL}/physician/${payload.username}/patients/${'anas'}/vitals`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                console.log(userVitals.data.VitalsRecord, 'asdasdd')
                setVitals(userVitals.data.VitalsRecord)
            }


        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUserVitals()

    }, [])

    return (
        <>
            <Box borderRadius={'15px'} paddingLeft='30px' paddingBottom={2}  >
                <Typography variant='h5' fontWeight={'700'} sx={{ opacity: 0.8 }}>Vitals Record</Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.4 }}>Keep track of your health status.</Typography>
            </Box >


            <VitalsCreateSection vitals={vitals} setVitals={setVitals} />

            <Divider sx={{ marginBottom: '50px' }} />
            <Box
                width={{ xs: '100%', sm: '80%', md: '95%' }}
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
                    {currentPageRender?.map(element => (<Grid key={element.id} item xs={12} sm={6} md={4} lg={3} px={1} py={1}>
                        <VitalCard dataObj={element} setVitals={setVitals} vitals={vitals} />
                    </Grid>))}



                </Grid >
            </Box>
            <Container sx={{ marginBottom: '30px' }}>
                <VitalsPagination setCurrentPage={setCurrentPage} PaginationPages={PaginationPages} />

            </Container>

            <Divider />

            <VitalsChart dataArr={vitals} />

        </>
    )
}
