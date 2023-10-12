import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import Grid from "@mui/material/Grid";
import IntroSection from './IntroSection';
import PrescriptionsSection from './PrescriptionsSection';
import VitalsChart from '../Vitals/VitalsChart';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
let DBRUL = process.env.REACT_APP_BASE_URL
export default function PrescriptionContainer() {
    const [prescription, setPrescription] = useState(null)

    async function fetchUserPrescriptions() {
        try {
            let token = cookie.load('auth')
            const payload = await jwtDecode(token)
            let userPresc = await axios.get(`${DBRUL}/patient/${payload.username}/prescriptions`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
            console.log(userPresc.data)
            setPrescription(userPresc.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUserPrescriptions()

    }, [])


    return (
        <>
            <Box borderRadius={'15px'} paddingLeft='30px' paddingBottom={2}  >
                <Typography variant='h5' fontWeight={'700'} sx={{ opacity: 0.8 }}>Prescription</Typography>
                <Typography variant='subtitle2' sx={{ opacity: 0.4 }}>The recipe to get better.</Typography>
            </Box >
            <IntroSection />
            <PrescriptionsSection prescription={prescription} setPrescription={setPrescription} />
            <VitalsChart />
        </>
    )
}
