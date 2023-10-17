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
    let token = cookie.load('auth')
    let payload
    if (token) {

        payload = jwtDecode(token)
        console.log(payload, 'zzzzzzzzzzzz')
    }

    // let temptoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYXMiLCJhY2NvdW50VHlwZSI6InBhdGllbnQiLCJpYXQiOjE2OTczMjk3OTR9.ZvTnDX-lUnQ2hOboC5iPbjjtNK0Zk8rekstBF2Q_Z1w'
    async function fetchUserPrescriptions() {
        try {
            if (payload?.accountType === 'patient') {

                let userPresc = await axios.get(`${DBRUL}/patient/${payload?.username}/prescriptions`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                console.log(userPresc.data, 'from Anas side prescriptions')
                setPrescription(userPresc.data)
            }
            if (payload?.accountType === 'physician') {

                let userPresc = await axios.get(`${DBRUL}/physician/${payload?.username}/patients/${'anas'}/prescriptions`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                console.log(userPresc.data, 'loooook here')
                setPrescription(userPresc.data)
                return userPresc.data
            }


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
            <IntroSection setPrescription={setPrescription} prescription={prescription} fetchUserPrescriptions={fetchUserPrescriptions} />
            <PrescriptionsSection prescription={prescription} setPrescription={setPrescription} />
            <VitalsChart />
        </>
    )
}
