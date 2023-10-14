import React from 'react'
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import Grid from "@mui/material/Grid";

import prescriptionCoverImg from '../../assets/images/prescriptions/pillscover.jpg'
import PrescriptionCard from './PrescriptionCard';
export default function PrescriptionsSection({prescription, setPrescription}) {
    return (
        <>
            <Box
                width={{ xs: '100%', sm: '90%', md: '95%' }}
                // bgcolor={'green'}

                py={{ xs: 4, md: 8 }}
                borderRadius={2}
                margin='0 auto '
                marginBottom='50px'
                boxShadow='0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
                sx={{
                    background: '#112731AA',
                    backgroundImage: `url(${prescriptionCoverImg})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    backgroundPosition: '10%',
                    backgroundBlendMode: 'overlay'

                }}>
                <Typography letterSpacing={2} color='white' variant='h3' textAlign='center'>PRESCRIPTIONS</Typography>
            </Box>

            <Box width={{ xs: '95%', sm: '80%', md: '85%' }} m='0 auto' bgcolor='white' borderRadius='20px' px={1} sx={{ boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
                {/* <Box width='90%' m='0 auto' height='80%' bgcolor='white'> */}
                <PrescriptionCard prescription={prescription} setPrescription={setPrescription}/>
            </Box>

            {/* </Box> */}

        </>
    )
}
