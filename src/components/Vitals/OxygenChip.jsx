import { Box, Typography } from '@mui/material'


// import O2SatIcon from '../CustomIcons/O2Sat';
import Lottie from 'lottie-react';
import oximeterAnimation from '../../assets/lottie/oximeter.json'


export default function OxygenChip({ parameter, value, toAnimate }) {
    return (


        <Box width={'100%'} gap={1} bgcolor='#F2F5F9' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center' p={2} borderRadius='15px' boxShadow='0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' >
            <Box>
                {/* <O2SatIcon fontSize='30px' color='#1F485B' /> */}
                <Lottie loop={toAnimate} animationData={oximeterAnimation} style={{ width: '70px' }} />
                <Typography variant='subtitle2' textTransform='capitalize'>Oxygen Saturation</Typography>
            </Box>
            <Typography variant='h6' fontWeight='700' color='green' >{value}%</Typography>
        </Box>



    )
}



