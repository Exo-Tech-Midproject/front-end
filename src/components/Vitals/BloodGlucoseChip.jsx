// import { Box, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


// import { MdOutlineBloodtype } from 'react-icons/md';

import Lottie from "lottie-react";
import glucoMeterAnimation from "../../assets/lottie/bloodSugar.json";


export default function BloodGlucoseChip({ parameter, value, toAnimate }) {


    return (

        <Box width={'50%'} gap={1} bgcolor='#F2F5F9' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center' p={2} borderRadius='15px' boxShadow='0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' >
            <Box >
                {/* <MdOutlineBloodtype fontSize='30px' color='#1F485B' /> */}
                <Lottie
                    loop={toAnimate}
                    animationData={glucoMeterAnimation} style={{ width: '70px' }}
                />
                <Typography variant='subtitle2'>Blood Glucose</Typography>
            </Box>
            <Typography variant='h6' fontWeight='700' color='green' >{value} mg/dL</Typography>
        </Box>



    )
}



