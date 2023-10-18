import React, { useContext, useEffect, useState } from 'react'
import SubPatientCard from './SubsCards/SubPatientCard'
import { LoginContext } from '../../ContextApi/Auth';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies'
import { Box, Typography } from '@mui/material';
import HeroSection from './HeroSection';
import { motion } from 'framer-motion';

let DBRUL = process.env.REACT_APP_BASE_URL
export default function PatientsContainer() {
    const { user } = useContext(LoginContext)
    const [subs, setSubs] = useState(null)
    async function fetchUserSubs() {
        try {

            let token = cookie.load('auth')
            if (token) {

                const payload = await jwtDecode(token)
                if (payload?.accountType === 'physician') {

                    let userSubs = await axios.get(`${DBRUL}/physician/${payload.username}/patients/subscribers`,
                        {
                            headers: { Authorization: `Bearer ${token}` }
                        })
                    setSubs(userSubs.data)
                    console.log(userSubs.data)
                }
            }

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchUserSubs()
    }, [])
    return (

        <>
            <HeroSection />
            <Typography
                component={motion.h1}
                initial={{ opacity: 0, y: 50, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                color={'#1F485B'}
                fontWeight={700}
                mt={4} variant='h2'
                textAlign='center'>Patients List</Typography>

            <Box display={'flex'} width='100%' justifyContent='center' mt={4} flexWrap={'wrap'}>
                {subs?.map(sub => (<SubPatientCard
                    userInfo={sub}
                />))}


            </Box>

        </>
    );
}
