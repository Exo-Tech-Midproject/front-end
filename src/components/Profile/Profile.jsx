// import { Box, Grid, } from '@mui/material'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useContext, useEffect, useRef, useState } from 'react'
import ProfileHeadSection from './ProfileHeadSection';
import InfoSection from './InfoSection';
import PrescriptionsSection from './PrescriptionsSection';

import axios from "axios";
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';

import ProfileCalendar from "./ProfileCalendar";
import VitalsChart from "../Vitals/VitalsChart";
import PresPieChart from "../Prescriptions/PresPieChart";
import AuthPatient from "../Auths/AuthPatient";
import PrescriptionsChart from "../Prescriptions/PrescriptionsChart";
let DBRUL = process.env.REACT_APP_BASE_URL

export default function Profile() {
    const [profileInfo, setProfileInfo] = useState(null)
    const [appointmentsInfo, setAppointmentsInfo] = useState([])
    const [prescriptionsInfo, setPrescriptionsInfo] = useState([])
    const [vitals, setVitals] = useState([])
    let ordered = prescriptionsInfo?.slice(0, 10).sort((a, b) => b.id - a.id)
    console.log(ordered, 'odddarara')
    let token = cookie.load('auth')
    let payload
    if (token) {

        payload = jwtDecode(token)
    }
    const containerRef = useRef(null);
    const getProfileInfo = async () => {
        try {
            if (payload) {
                const response = await axios.get(`${DBRUL}/${payload.accountType}/${payload.username}/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                let data = response.data
                setProfileInfo(data)
                return data
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }

    }
    const getAppointmentsInfo = async () => {
        try {
            if (payload) {
                const response = await axios.get(`${DBRUL}/${payload.accountType}/${payload.username}/appointments`, {
                    headers: { Authorization: `Bearer ${token}` }

                });

                let data = response.data
                setAppointmentsInfo(data)
                return data
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }

    }
    const getPrescriptionsInfo = async () => {
        try {
            if (payload) {
                if (payload.accountType === 'patient') {


                    const response = await axios.get(`${DBRUL}/${payload.accountType}/${payload.username}/prescriptions`, {
                        headers: { Authorization: `Bearer ${token}` }

                    });

                    let data = response.data
                    setPrescriptionsInfo(data)
                    return data
                }
                else if (payload.accountType === 'physician') {


                    const response = await axios.get(`${DBRUL}/${payload.accountType}/${payload.username}/patients/prescriptions`, {
                        headers: { Authorization: `Bearer ${token}` }

                    });

                    let data = response.data
                    setPrescriptionsInfo(data)
                    return data
                }
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }

    }
    const getVitalsInfo = async () => {
        try {
            if (payload) {
                if (payload.accountType === 'patient') {


                    const response = await axios.get(`${DBRUL}/${payload.accountType}/${payload.username}/vitals`, {
                        headers: { Authorization: `Bearer ${token}` }

                    });

                    let data = response.data
                    setVitals(data)
                    return data
                }
                else if (payload.accountType === 'physician') {


                    const response = await axios.get(`${DBRUL}/${payload.accountType}/${payload.username}/patients/vitals`, {
                        headers: { Authorization: `Bearer ${token}` }

                    });

                    let data = response.data
                    setVitals(data)
                    return data
                }
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }

    }
    useEffect(() => {
        getProfileInfo()
        getAppointmentsInfo()
        getPrescriptionsInfo()
        getVitalsInfo()
    }, [])
    return (
        <Grid container bgcolor={'#f2f5f9'} rowGap={4} mt={9} >


            <Grid item xs={12} md={8} paddingLeft={4} paddingTop={4} >
                <ProfileHeadSection getProfileInfo={getProfileInfo} profileInfo={profileInfo} setProfileInfo={setProfileInfo} />
            </Grid >

            <Grid item xs={12} md={4} pl={4} pt={4}>
                <Box minHeight={{ xs: '400px', md: '200px' }} ref={containerRef} p={2} borderRadius='15px' boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px' sx={{ height: '100%', overflow: 'auto', backgroundColor: 'white' }}>
                    <ProfileCalendar containerRef={containerRef} appointmentsInfo={appointmentsInfo} />
                </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={8} paddingLeft={4} paddingTop={4} >

                <InfoSection getProfileInfo={getProfileInfo} profileInfo={profileInfo} setProfileInfo={setProfileInfo} />
                {/* <InfoSection /> */}

            </Grid >

            <Grid item xs={12} md={4} pl={4} pt={4}  >
                {/* <SidePageSection /> */}
                {/* <SidePageSection /> */}
                <PrescriptionsSection prescriptionsInfo={ordered} getProfileInfo={getProfileInfo} profileInfo={profileInfo} setProfileInfo={setProfileInfo} />
            </Grid>
            <Grid item xs={12} md={12} pl={4} pt={2} pr={4} >
                <AuthPatient>
                    <VitalsChart dataArr={vitals} />
                </AuthPatient>
            </Grid>
            <AuthPatient>
                <Grid item xs={12} md={12} pl={4} pt={2} pr={4} pb={10}  >
                    {/* <Box display='flex'
                        flexWrap='wrap'
                        justifyContent='space-around'
                        width='100%'
                        height='500px'
                        bgcolor='white'
                        borderRadius='15px'
                        boxShadow='rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px'
                        m='0 auto'> */}

                    {/* <PresPieChart data={prescriptionsInfo} /> */}
                    <PrescriptionsChart prescription={prescriptionsInfo} />
                    {/* </Box> */}
                </Grid>
            </AuthPatient>


        </Grid >
    )
}